import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import Recipe from "App/Models/Recipe";
import { DateTime } from 'luxon';

export default class Tag extends BaseModel {
  @manyToMany(() => Recipe,
    {
      localKey : 'id',
      relatedKey : 'id',
      pivotTimestamps : true,
    })
  public recipes: ManyToMany<typeof Recipe>;

  @column({ isPrimary : true })
  public id: number;

  @column.dateTime({ autoCreate : true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate : true, autoUpdate : true })
  public updatedAt: DateTime;

  @column()
  public name: string;

  @column()
  public picture?: string;
}
