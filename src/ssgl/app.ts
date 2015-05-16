/// <reference path="../d/client.d.ts" />

import {inject, customAttribute, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import * as Utils from 'lib/util';

class Product {
  id: number;
  name: string;
  color: number;
}

class Api<T> {
  private path: string;
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
  delete(id: number): Promise<void> {
    return (<any>this.http.createRequest(`${this.path}/${id}`))
      .asDelete()
      .send();
  }
}

@customAttribute('color')
@inject(Element)
export class ColorValue {
  @bindable name: string;
  @bindable value: number;
  constructor(private element: HTMLElement) { }
  nameChanged() {
    var col: string = this.element.style.color;
    var val: number = null;
    if(col !== "") {
      var m = getComputedStyle(this.element).color
        .match(/^rgba?\((\d+), (\d+), (\d+)(?:, \d+)?\)$/);
      if(m !== null) {
        var [r, g, b] = m.slice(1).map(v => +v);
        val = r<<16 | g <<8 | b;
      }
    }
    this.value = val;
  }
  valueChanged(col) {
    if(col != null && this.name === undefined) {
      // name unbound
      var colStr = [col >> 16, (col >> 8) & 0xff, col & 0xff].join(",");
      this.element.style.color = `rgb(${colStr})`;
    }
  }
}

@inject(HttpClient)
export class App {
  products: Product[];
  api: Api<Product>;
  form = new Product();

  colorName: string = "";
  colorValue: number;

  constructor(http: HttpClient) {
    this.api = new Api<Product>(http, 'product');
    this.api.all()
      .then(prods => this.products = prods);
  }
  add() {
    this.api.post(this.form)
      .then(prod => this.products.push(prod));
  }
  remove(prod, index) {
    this.products.splice(index, 1);
    this.api.delete(prod.id);
  }
}

