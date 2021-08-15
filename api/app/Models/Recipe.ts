import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import User from "App/Models/User";
import { DateTime } from 'luxon';

export default class Recipe extends BaseModel {

  @manyToMany(() => Tag)
  public tags: ManyToMany<typeof Tag>;

  /*@manyToMany(() => User)
  public favorites: ManyToMany<typeof User>;*/

  @belongsTo(() => User, { foreignKey : 'owner_id' })
  public owner: BelongsTo<typeof User>;

  @column({ isPrimary : true })
  public id: number;

  @column.dateTime({ autoCreate : true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate : true, autoUpdate : true })
  public updatedAt: DateTime;

  @column()
  public owner_id: number;


  @column()
  public nb_person: number;

  @column()
  public steps: string;

  @column()
  public picture?: string;

  @column()
  public cooking_time: number;

  @column()
  public preparation_time: number;

  @column()
  public rest_time: number;

  @column()
  public difficulty: number;
}
