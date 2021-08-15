import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import Recipe from "App/Models/Recipe";
import { DateTime } from 'luxon';

export default class Ingredient extends BaseModel {
  @column({ isPrimary : true })
  public id: number;


  @manyToMany(() => Recipe, {
    localKey : 'id',
    relatedKey : 'id',
    pivotColumns : ['quantity'],
    pivotTimestamps : true,
  })
  public recipes: ManyToMany<typeof Recipe>;


  @column.dateTime({ autoCreate : true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate : true, autoUpdate : true })
  public updatedAt: DateTime;

  @column()
  public unity: string;

  @column()
  public name: string;

  @column()
  public picture: string;
}
