/// <reference path="d/server.d.ts" />

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Utils from './ssgl/lib/util';
import * as api from './api/api';
import Config from './config';
import './api/schema';

var config = <Config>require('./config.json');
var app = express();
app.use(express.static('www'));
app.use(bodyParser.json());
api.register(app);
app.listen(8080);
