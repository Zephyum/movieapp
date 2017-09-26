
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('director').del()
    .then(function () {
      // Inserts seed entries
      return knex('director').insert([
        {id: 1, name: 'George Lucas', nationality: 'American'}
      ]);
    });
};
