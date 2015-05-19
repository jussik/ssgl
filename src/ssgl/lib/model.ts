import {makeDecorator, getDecorations} from './decogen';

export const column = makeDecorator({
  primary: { primary: true },
  required: { required: true },
  int: { type: "int" },
  serial: { type: "serial" },
  text: { type: "text" }
}, {
  primary: false,
  required: false,
  type: null
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
  return target.prototype[tableKey] || null;
}

export class Model {
  @column.serial.primary
  id: number;
  
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
  clone() {
    var copy = new (<any>this.constructor)();
    for(var k in this) {
      copy[k] = this[k];
    }
    return copy;
  }
}
