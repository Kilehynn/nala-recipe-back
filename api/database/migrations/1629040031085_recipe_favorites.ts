import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class RecipeFavorites extends BaseSchema {
  protected tableName = 'recipe_favorites';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique().notNullable();
      table.timestamp('created_at', { useTz : true });
      table.integer('id_user').notNullable().unsigned().references('users.id');
      table.integer('id_recipe').notNullable().unsigned().references('recipes.id');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}


