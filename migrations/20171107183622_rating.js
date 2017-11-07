exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('rating', (table) => {
    table.increments()
    table.integer('token_id').references('id').inTable('token').notNull()
      .onDelete('cascade')
    table.string('description')
    table.decimal('rating', 5, 5)
    table.enu('status', ['to_review', 'active', 'reviewed'])        
    table.boolean('is_deleted')
    table.dateTime("createdAt").notNull()
    table.dateTime("updatedAt").nullable()
    table.dateTime("deletedAt").nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('rating')
}
