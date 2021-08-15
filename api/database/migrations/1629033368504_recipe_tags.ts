import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class RecipeTags extends BaseSchema {
  protected tableName = 'recipe_tags';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().notNullable().primary();
      table.integer('recipe_id').notNullable().unsigned().references('recipes.id');
      table.integer('tag_id').notNullable().unsigned().references('tags.id');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
