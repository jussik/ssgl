import {Model, table, column} from './model';

@table('product')
export class Product extends Model {
  @column.text.required
  name: string = null;
  @column.int.required
  color: number = null;
}
