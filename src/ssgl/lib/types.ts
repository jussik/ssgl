import {Model, table, column} from './model';

@table('product')
export class Product extends Model {
  @column.serial.primary
  id: number;
  @column.text.required
  name: string = null;
  @column.int.required
  color: number = null;
}
