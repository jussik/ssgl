import {makeDecorator, getDecorations} from './decogen';

export const column = makeDecorator({
  primary: { primary: true },
  required: { required: true },
  int: { type: "int" },
  text: { type: "text" }
});
export function getColumns(target) {
  return getDecorations(column, target);
}

const tableKey = Symbol('table');
export function table(name) {
  return function(target) {
    target.prototype[tableKey] = name;
  }
}
export function getTableName(target) {
  return target.prototype[tableKey];
}

export class Model {
  load(data) {
    for(var k in data) {
      this[k] = data[k];
    }
    return this;
  }
  fill(data) {
    for(var k in this) {
      data[k] = this[k];
    }
    return data;
  }
}
