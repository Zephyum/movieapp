exports.up = function(knex, Promise) {
  return knex.schema.createTable('director', function(table) {
    table.increments()
    table.varchar('name', 140).notNullable()
    table.varchar('nationality', 140)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('director')
};
