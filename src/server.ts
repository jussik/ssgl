/// <reference path="d/server.d.ts" />

import * as express from 'express';
import * as orm from 'orm';
import * as Utils from './ssgl/lib/util';
import * as api from './api/api';
import Config from './config';
import * as schema from './api/schema';

var config = <Config>require('./config.json');
var app = express();
app.use(express.static('www'));
app.use(orm.express(config.db, { define: schema.register }))
api.register(app);
app.listen(8080);
