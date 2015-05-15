import {Application} from 'express';
import {Product} from './schema';

function respond(res) {
  return (err, data) => err
    ? res.status(err.code === 2 ? 404 : 500).send(err)
    : res.send(data);
}

export default function(app: Application, apiRoot: string) {
  app.get(apiRoot, (req, res) => Product.all(respond(res)));
  app.get(apiRoot + "/:id(\\d+)", (req, res) => Product.get(+req.params.id, respond(res)));
  app.post(apiRoot, (req, res) => {
    var data = req.body;
    delete data.id;
    Product.create(data, respond(res));
  });
}
