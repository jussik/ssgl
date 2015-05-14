/// <reference path="d/client.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import * as Utils from 'lib/util';

@Component({ selector: 'ssgl' })
@View({ template: '<strong>{{message}}</strong>' })
class SsglComponent {
  message: string;
  constructor() {
    this.message = Utils.Hello("Browser");
  }
}

bootstrap(SsglComponent);

