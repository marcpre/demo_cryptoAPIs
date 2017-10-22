
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exchanges').del()
    .then(function () {
      // Inserts seed entries
      return knex('exchanges').insert([
        { name: 'poloniex'},
      ]);
    });
};
