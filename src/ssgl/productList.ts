/// <reference path="../d/client.d.ts" />
/// <reference path="./productForm.ts" />
/// <reference path="./color.ts" />

import {inject} from 'aurelia-framework';
import {ApiFactory, Api, Product} from './api'

@inject(ApiFactory)
export class ProductList {
  products: Product[];

  private api: Api<Product>;

  constructor(af: ApiFactory) {
    this.api = af.create<Product>('product');
    this.api.all()
      .then(prods => this.products = prods);
  }
  add(data) {
    this.api.post(data)
      .then(prod => this.products.push(prod));
  }
  remove(prod, index) {
    this.products.splice(index, 1);
    this.api.delete(prod.id);
  }
}
