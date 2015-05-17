/// <reference path="../d/client.d.ts" />

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {makeDecorator, getDecorations} from './lib/decogen';

@inject(HttpClient)
export class ApiFactory {
  constructor(private http: HttpClient) { }
  create<T>(target: string, ctor: { new(): T }): Api<T> {
    return new Api<T>(this.http, target, ctor);
  }
}

export class Api<T> {
  private path: string;

  constructor(private http: HttpClient, target: string, private ctor: { new(): T }) {
    this.path = '/api/' + target;
  }
  instantiate(data): T {
    var t: T = new this.ctor();
    for(var k in data) {
      t[k] = data[k];
    }
    return t;
  }
  all(): Promise<T[]> {
    return (<any>this.http.createRequest(this.path))
      .asGet()
      .send()
      .then(resp => JSON.parse(resp.response).map(p => this.instantiate(p)))
  }
  post(data: T): Promise<T> {
    return (<any>this.http.createRequest(this.path))
      .asPost()
      .withContent(data)
      .withHeader('Content-Type', 'application/json; charset=utf-8')
      .send()
      .then(resp => this.instantiate(JSON.parse(resp.response)));
  }
  delete(id: number): Promise<void> {
    return (<any>this.http.createRequest(`${this.path}/${id}`))
      .asDelete()
      .send();
  }
}

var model = makeDecorator({
  primary: { primary: true },
  required: { required: true },
  int: { type: "int" },
  text: { type: "text" }
});

export class Product {
  @model.primary.int
  id: number;
  @model.text.required
  name: string = null;
  @model.int.required
  color: number = null;
}

console.log("product", getDecorations(model, Product));
