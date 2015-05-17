/// <reference path="../d/client.d.ts" />

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class ApiFactory {
  constructor(private http: HttpClient) { }
  create<T>(target: string): Api<T> {
    return new Api<T>(this.http, target);
  }
}

export class Api<T> {
  private path: string;

  constructor(private http: HttpClient, target: string) {
    this.path = '/api/' + target;
  }
  all(): Promise<T[]> {
    return (<any>this.http.createRequest(this.path))
      .asGet()
      .send()
      .then(resp => JSON.parse(resp.response))
  }
  post(data: T): Promise<T> {
    return (<any>this.http.createRequest(this.path))
      .asPost()
      .withContent(data)
      .withHeader('Content-Type', 'application/json; charset=utf-8')
      .send()
      .then(resp => JSON.parse(resp.response));
  }
  delete(id: number): Promise<void> {
    return (<any>this.http.createRequest(`${this.path}/${id}`))
      .asDelete()
      .send();
  }
}

export class Product {
  id: number;
  name: string = null;
  color: number = null;
}
