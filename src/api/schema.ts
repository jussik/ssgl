export var Product;
export function register(db, models, next) {
  Product = db.define('product', {
    id: Number,
    name: { type: "text", required: true }
  });
  db.sync(next);
}
