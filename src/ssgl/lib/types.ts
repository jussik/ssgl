import {makeDecorator} from './decogen';

var model = makeDecorator({
  primary: { primary: true },
  required: { required: true },
  int: { type: "int" },
  text: { type: "text" }
});

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

export class Product extends Model {
  @model.primary.int
  id: number;
  @model.text.required
  name: string = null;
  @model.int.required
  color: number = null;
}
