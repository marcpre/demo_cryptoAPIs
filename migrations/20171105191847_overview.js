exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('overview', (table) => {
    table.increments()
    table.string('coinname').notNull()
    table.decimal('marketcap', 50, 30)
    table.decimal('price', 50, 30)
    table.decimal('volume', 50, 30)
    table.decimal('circulatingSupply', 50, 30)
    table.decimal('change', 50, 30)
    table.dateTime("createdAt").notNull()
    table.dateTime("updatedAt").nullable()
    table.dateTime("deletedAt").nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('overview')
}
