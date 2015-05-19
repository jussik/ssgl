/// <reference path="../d/client.d.ts" />
/// <reference path="./productCanvas.ts" />
/// <reference path="./colorBox.ts" />

import {inject, customElement, bindable} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {ValidationGroup} from 'aurelia-validation/validation/validation-group';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Product} from './lib/types';
import {ApiFactory, Api} from './api';
import {cssToInt, intToCss} from './color';

@customElement('product-form')
@inject(ApiFactory, Validation, EventAggregator)
export class ProductForm {
  @bindable product: Product = new Product();
  @bindable colorName: string = "";
  validation: ValidationGroup;
  
  private unsub: Function;
  private api: Api<Product>;

  constructor(af: ApiFactory, validation: Validation, private events: EventAggregator) {
    this.api = af.create(Product);
    
    this.validation = validation.on(this)
      .ensure("product.name").isNotEmpty()
      .ensure("product.color").isNotEmpty();
    this.validation.validate().catch(()=>{});
    
    this.unsub = this.events.subscribe('product.edit', prod => this.load(prod));
  }
  detached() {
    this.unsub();
  }
  
  load(prod: Product) {
    this.colorName = intToCss(prod.color) || "";
    this.product = prod;
    this.validation.validate().catch(()=>{});
  }
  save() {
    this.api.save(this.product).then(prod => {
      this.load(prod);
      this.events.publish('product.saved', this.product.clone());
    });
  }
  
  colorNameChanged(name) {
    this.product.color = cssToInt(name);
  }
}
