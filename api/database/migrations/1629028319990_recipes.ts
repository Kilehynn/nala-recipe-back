import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Recipes extends BaseSchema {
  protected tableName = 'recipes';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique().notNullable();
      table.timestamps(true);
      table.integer('owner_id').notNullable().unsigned().references('users.id')
        .onDelete('CASCADE');
      table.integer('nb_person').notNullable();
      table.text('steps').notNullable();
      table.string('picture', 255).nullable();
      table.integer('cooking_time').notNullable();
      table.integer('preparation_time').notNullable();
      table.integer('rest_time').notNullable();
      table.integer('difficulty').notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
