import Hash from "@ioc:Adonis/Core/Hash";
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';

export default class User extends BaseModel {

  @column({ isPrimary : true })
  public id: number;

  @column.dateTime({ autoCreate : true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate : true, autoUpdate : true })
  public updatedAt: DateTime;

  @column()
  public admin: boolean;

  @column()
  public pseudo: string;

  @column()
  public email: string;

  @column({ serializeAs : null })
  public password: string;

  @column()
  public avatar?: string;

  @column()
  public verified_account: string;


  @column()
  public dark_mode: boolean;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }

  }
}
