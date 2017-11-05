
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('ticker_data', (table) => {
    table.increments()
    table.integer('exchange_id').references('id').inTable('exchanges').notNull()
      .onDelete('cascade')
    table.string('pair').notNull()
    table.decimal('last', 50, 30)
    table.decimal('lowestAsk', 50, 30)
    table.decimal('highestBid', 50, 30)
    table.decimal('percentChange', 50, 30)
    table.decimal('baseVolume', 50, 30)
    table.decimal('quoteVolume', 50, 30)
    table.boolean('isFrozen')
    table.decimal('high24hr', 50, 30)
    table.decimal('low24hr', 50, 30)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ticker_data')
}
