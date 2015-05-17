/// <reference path="../d/client.d.ts" />

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Model} from './lib/types';

@inject(HttpClient)
export class ApiFactory {
  constructor(private http: HttpClient) { }
  create<T extends Model>(target: string, ctor: { new(): T }): Api<T> {
    return new Api<T>(this.http, target, ctor);
  }
}

export class Api<T extends Model> {
  private path: string;

  constructor(private http: HttpClient, target: string, private ctor: { new(): T }) {
    this.path = '/api/' + target;
  }
  all(): Promise<T[]> {
    return (<any>this.http.createRequest(this.path))
      .asGet()
      .send()
      .then(resp => JSON.parse(resp.response).map(data => new this.ctor().load(data)))
  }
  post(data: T): Promise<T> {
    return (<any>this.http.createRequest(this.path))
      .asPost()
      .withContent(data)
      .withHeader('Content-Type', 'application/json; charset=utf-8')
      .send()
      .then(resp => new this.ctor().load(JSON.parse(resp.response)));
  }
  delete(id: number): Promise<void> {
    return (<any>this.http.createRequest(`${this.path}/${id}`))
      .asDelete()
      .send();
  }
}

