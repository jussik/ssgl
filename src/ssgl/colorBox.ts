/// <reference path="../d/client.d.ts" />

import {inject, customAttribute, bindable} from 'aurelia-framework';
import {intToCss} from './color';

@customAttribute('color-box')
@inject(Element)
export class ColorBox {
  constructor(private element: HTMLElement) {
      this.element.style.visibility = "hidden";
  }
  valueChanged(col) {
    var css = intToCss(col);
    if(css !== null) {
      this.element.style.visibility = "visible";
      this.element.style.color = css;
    } else {
      this.element.style.visibility = "hidden";
    }
  }
}