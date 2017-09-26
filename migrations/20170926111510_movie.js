exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table) {
    table.increments()
    table.varchar('title', 140).notNullable();
    table.date('year')
    table.integer('director_id').references('director.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movie')
};
