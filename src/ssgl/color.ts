/// <reference path="../d/client.d.ts" />

import {inject, customAttribute, bindable} from 'aurelia-framework';

@customAttribute('color')
@inject(Element)
export class ColorValue {
  @bindable name: string = null;
  @bindable value: number = null;

  constructor(private element: HTMLElement) { }
  nameChanged(n) {
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
