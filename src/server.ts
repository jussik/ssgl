/// <reference path="d/server.d.ts" />

import * as express from 'express';
import * as Utils from './lib/util';

var app = express();
app.use(express.static('www'));
app.get('/hello', (req, res) => res.send(Utils.Hello("Server")));

var server = app.listen(8080, () => console.log("Listening on " + server.address().port));

