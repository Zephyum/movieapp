
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {id: 1, title: 'star wars', year: '1996-01-01', director_id: '1'}
      ]);
    });
};
