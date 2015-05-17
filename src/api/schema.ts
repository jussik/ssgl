/// <reference path="../d/server.d.ts" />

import Config from '../config';
import * as sql from 'sequelize';
import {getTableName, getColumns} from '../ssgl/lib/model';
import * as types from '../ssgl/lib/types';

const typeMap = {
  serial: sql.INTEGER,
  int: sql.INTEGER,
  text: sql.TEXT
};

var config = <Config>require('../config.json');
var db = new sql(config.db, {
  define: {
    timestamps: false,
    freezeTableName: true,
    underscoredAll: true
  }
});

function makeDbModel(target) {
  var table = getTableName(target);
  var cols = getColumns(target);
  var model = {};
  for(let name in cols) {
    var src = cols[name];
    if(src.type === null)
      throw `Missing type declaration for ${table}.${name}`;
    var sqlType = typeMap[src.type];
    if(sqlType === undefined)
      throw `Invalid type declaration '${src.type}' for ${table}.${name}`;

    model[name] = {
      primaryKey: src.primary,
      type: sqlType,
      autoIncrement: src.type === 'serial',
      allowNull: !(src.required || src.primary)
    };
  }
  return db.define(table, model);
}

export const Product = makeDbModel(types.Product);
Product.sync();
