/// <reference path="../d/client.d.ts" />

import {inject, autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import * as Utils from 'lib/util';

class Product {
  id: number;
  name: string;
}

class Api<T> {
  path: string;
  constructor(private http: HttpClient, target: string) {
    this.path = '/api/' + target;
  }
  all(): Promise<T[]> {
    return (<any>this.http.createRequest(this.path))
      .asGet()
      .send()
      .then(resp => <T[]>JSON.parse(resp.response))
  }
  post(data: T): Promise<T> {
    return (<any>this.http.createRequest(this.path))
      .asPost()
      .withContent(data)
      .withHeader('Content-Type', 'application/json; charset=utf-8')
      .send()
      .then(resp => <T>JSON.parse(resp.response));
  }
}

@inject(HttpClient)
export class App {
  products: Product[];
  api: Api<Product>;
  form = new Product();

  constructor(http: HttpClient) {
    this.api = new Api<Product>(http, 'product');
    this.api.all()
      .then(prods => this.products = prods);
  }
  add() {
    this.api.post(this.form)
      .then(prod => this.products.push(prod));
  }
}

