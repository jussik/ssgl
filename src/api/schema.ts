import Config from '../config';
import * as sql from 'sequelize';

var config = <Config>require('../config.json');
var db = new sql(config.db, {
  define: {
    timestamps: false,
    freezeTableName: true,
    underscoredAll: true
  }
});

export const Product = db.define('product', {
  name: { type: sql.TEXT, allowNull: false },
  color: { type: sql.INTEGER, allowNull: false }

});
Product.sync();
