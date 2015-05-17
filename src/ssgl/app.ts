/// <reference path="../d/client.d.ts" />
/// <reference path="./productList.ts" />

import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => a.setRoot('productList', document.body));
}
