import {Application, Response} from 'express';
import {Product} from './schema';

function check(res: Response, cb: (data?: any) => void): (err: any, data: any) => void {
  return (err, data) => err
    ? res.status(err.code === 2 ? 404 : 500).send(err)
    : cb(data);
}
function send(res: Response): (err: any, data: any) => void {
  return check(res, data => res.send(data));
}
function ok(res: Response): (err: any, data: any) => void {
  return check(res, () => res.send(null));
}

export default function(app: Application, apiRoot: string) {
  var id = "/:id(\\d+)";
  app.get(apiRoot, (req, res) => Product.all(send(res)));
  app.get(apiRoot + id, (req, res) => Product.get(+req.params.id, send(res)));
  app.post(apiRoot, (req, res) => {
    var data = req.body;
    delete data.id;
    Product.create(data, send(res));
  });
  /*app.delete(apiRoot + id, (req, res) => 
      Product.get(+req.params.id, check(res, prod =>
          prod.remove(ok(res)))));*/
  app.delete(apiRoot + id, (req, res) => Product.find({ id: +req.params.id }).remove(ok(res)));
}
