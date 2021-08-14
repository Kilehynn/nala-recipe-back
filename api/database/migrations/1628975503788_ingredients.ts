import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Ingredients extends BaseSchema {
  protected tableName = 'ingredients';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique().primary();
      table.timestamps(true);
      table.string('unity').notNullable();
      table.string('name').notNullable().unique();
      table.string('picture').notNullable().unique();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
