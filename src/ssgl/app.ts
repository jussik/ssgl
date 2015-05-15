/// <reference path="../d/client.d.ts" />

import * as Utils from 'lib/util';
//import {Aurelia} from 'aurelia-framework/aurelia';

console.log(Utils.Hello("Console"));

export class App {
  name: string = "App";
  constructor() {
    console.log("INIT", this.name);
  }
}

/*export function configure(aurelia: Aurelia) {
  console.log("config", aurelia);
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => a.setRoot('main'));
}*/

