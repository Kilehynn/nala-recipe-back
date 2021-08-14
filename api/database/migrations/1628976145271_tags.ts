import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Tags extends BaseSchema {
  protected tableName = 'tags';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().notNullable().primary();
      table.timestamps(true);
      table.string('name').notNullable().unique();
      table.string('picture');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
