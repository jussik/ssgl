/// <reference path="../d/client.d.ts" />
/// <reference path="./color.ts" />

import {inject, customElement} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {ValidationGroup} from 'aurelia-validation/validation/validation-group';
import {Product} from './api';
import {ProductList} from './productList';

@customElement('product-form')
@inject(ProductList, Validation)
export class ProductForm {
  prod: Product = new Product();
  colorName: string = "";

  validation: ValidationGroup;

  constructor(private list: ProductList, validation: Validation) {
    this.validation = validation.on(this)
      .ensure("prod.name").isNotEmpty()
      .ensure("prod.color").isNotEmpty();
    this.validation.validate().catch(()=>{});
  }
  add() {
    this.list.add(this.prod);
    this.prod = new Product();
    this.colorName = "";
  }
}
