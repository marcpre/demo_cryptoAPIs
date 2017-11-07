exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('token', (table) => {
    table.increments()
    table.string('name').notNull()
    table.string('symbol').notNull()
    table.boolean('is_deleted')
    table.dateTime("createdAt").notNull()
    table.dateTime("updatedAt").nullable()
    table.dateTime("deletedAt").nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('overview')
}
