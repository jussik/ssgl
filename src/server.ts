/// <reference path="d/tsd.d.ts" />
/// <reference path="lib/util.ts" />

var express = require('express');
var app = express();

app.get('/', (req, res) => res.send(Utils.hello("Server")));

var server = app.listen(8080, () => console.log("Listening on " + server.address().port));

