import Config from '../config';

export var Product;
export function register(db, models, next) {
  var config = <Config>require('../config.json');
  if(config.logSql) {
    db.driver.execQuery("set log_statement = 'all'", (err, _) => err
        ? console.error("Error while enabling SQL logging: " + err.toString())
        : console.log("SQL logging enabled."));
  }

  Product = db.define('product', {
    id: Number,
    name: { type: "text", required: true }
  });
  db.sync(next);
}
