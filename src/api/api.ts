/// <reference path="../d/server.d.ts" />

import {Application} from 'express';
import product from './product-ctrl'

export function register(app: Application) {
  product(app, '/api/product');
}

