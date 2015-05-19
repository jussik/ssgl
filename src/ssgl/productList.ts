/// <reference path="../d/client.d.ts" />
/// <reference path="./productForm.ts" />
/// <reference path="./colorBox.ts" />

import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ApiFactory, Api} from './api'
import {Product} from './lib/types'

@inject(ApiFactory, EventAggregator)
export class ProductList {
  products: Product[];
  selected: Product;

  private api: Api<Product>;
  private unsubs: Function[];

  constructor(af: ApiFactory, private events: EventAggregator) {
    this.api = af.create(Product);
    this.api.all()
      .then(prods => this.products = prods);
    
    this.unsubs = [
      this.events.subscribe('product.saved', prod => this.add(prod)),
      this.events.subscribe('product.removed', prod => this.remove(prod))
    ];
  }
  detached() {
    this.unsubs.forEach(fn => fn());
  }
  
  add(prod: Product) {
    var idx = this.indexOf(prod);
    if(idx > -1) {
      this.products.splice(idx, 1, prod);
    } else {
      this.products.push(prod);
    }
  }
  remove(prod: Product) {
    var idx = this.indexOf(prod);
    this.products.splice(idx, 1);
    this.api.delete(prod.id);
  }
  indexOf(prod: Product): number {
    var idx = -1;
    this.products.some((p, i) => p.id === prod.id && (idx = i, true));
    return idx;
  }
  edit(prod?: Product) {
    this.events.publish('product.edit', prod == null ? new Product() : prod.clone());
  }
}
