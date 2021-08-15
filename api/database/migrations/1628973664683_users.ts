import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique().primary();

      table.timestamps(true);

      table.boolean('admin').defaultTo(false).notNullable();
      table.string('pseudo', 255).notNullable().unique();
      table.string('email', 255).notNullable().unique();
      table.string('password', 255).notNullable();
      table.string('avatar', 255);
      table.string('verified_account', 255).notNullable();
      table.boolean('dark_mode').defaultTo(false).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
