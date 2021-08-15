import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class RecipeIngredients extends BaseSchema {
  protected tableName = 'recipe_ingredients';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true);

      table.increments('id').primary().unique().notNullable();
      table.integer('ingredients_id').notNullable().unsigned().references('ingredients.id');
      table.integer('recipe_id').notNullable().unsigned().references('recipes.id');
      table.integer('quantity').notNullable().unsigned();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
