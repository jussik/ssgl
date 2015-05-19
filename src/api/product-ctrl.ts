import {Application, Request, Response} from 'express';
import {Product} from './schema';

function send(fn: (req?: Request) => any, code?: number): (req: Request, res: Response) => any {
  return (req, res) => fn(req).then(
      code !== undefined
        ? data => res.status(code).end() // just send code if defined
        : (data => data === null
          ? res.status(404).end() // send 404 if data is null
          : res.json(data)),
      err => res.status(500).send(err.toString()));
}

export default function(app: Application, apiRoot: string) {
  var id = "/:id(\\d+)";
  app.get(apiRoot, send(req => Product.findAll()));
  app.get(apiRoot + id, send(req => Product.find(+req.params.id)));
  app.post(apiRoot, send(req => {
    var data = req.body;
    delete data.id;
    return Product.create(data);
  }));
  app.put(apiRoot + id, send(req => Product.update(req.body, { where: { id: +req.params.id } }), 200));
  app.delete(apiRoot + id, send(req => Product.destroy({ where: { id: +req.params.id } }), 204));
}
