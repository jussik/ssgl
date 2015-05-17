/// <reference path="../d/client.d.ts" />

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Model, getTableName} from './lib/model';

@inject(HttpClient)
export class ApiFactory {
  constructor(private http: HttpClient) { }
  create<T extends Model>(ctor: { new(): T }): Api<T> {
    return new Api<T>(this.http, ctor);
  }
}

export class Api<T extends Model> {
  private path: string;

  constructor(private http: HttpClient, private ctor: { new(): T }) {
    var target = getTableName(ctor);
    if(target == null)
      throw "Table name not defined for type " + ctor.name;
    this.path = '/api/' + getTableName(ctor);
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

