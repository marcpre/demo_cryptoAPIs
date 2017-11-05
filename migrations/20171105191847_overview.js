
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('overview', (table) => {
    table.increments()
    table.integer('exchange_id').references('id').inTable('exchanges').notNull()
      .onDelete('cascade')
    table.string('coinname').notNull()
    table.decimal('marketcap', 50, 30)
    table.decimal('price', 50, 30)
    table.decimal('volume', 50, 30)
    table.decimal('circulatingSupply', 50, 30)
    table.decimal('change', 50, 30)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('overview')
}
