import {Application} from 'express';
import {Product} from './schema';

export default function(app: Application, apiRoot: string) {
  var id = "/:id(\\d+)";
  app.get(apiRoot, (req, res) => Product.findAll()
      .then(data => res.send(data)));
  app.get(apiRoot + id, (req, res) => Product.find(+req.params.id)
      .then(data => data ? res.send(data) : res.send(404, null)));
  app.post(apiRoot, (req, res) => {
    var data = req.body;
    delete data.id;
    Product.create(data).then(data => res.send(data));
  });
  app.delete(apiRoot + id, (req, res) => Product.destroy({
    where: { id: +req.params.id }
  }).then(() => res.send(null)));
}
