export async function up(knex) {
  await knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('gender');
    table.boolean('deleted').defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  await knex.schema.dropTable('users');
}