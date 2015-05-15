/// <reference path="../d/client.d.ts" />

import {inject, autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import * as Utils from 'lib/util';

console.log(Utils.Hello("Console"));

@inject(HttpClient)
export class App {
  name: string = "Hmm...";
  constructor(http: HttpClient) {
    http.get('/hello').then(resp =>
        setTimeout(
          () => this.name = resp.response,
          1000));
  }
}

