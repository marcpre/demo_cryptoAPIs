
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exchanges').del()
    .then(() =>
      // Inserts seed entries
      knex('exchanges').insert([
        { name: 'poloniex' },
      ]))
}
