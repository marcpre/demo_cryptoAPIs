exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('socials', (table) => {
    table.increments()
    table.integer('token_id').references('id').inTable('token').notNull()
      .onDelete('cascade')
    table.string('urls')
    table.enu('socials', ['reddit', 'twitter', 'youtube', 'website', 'message boards'])
    table.enu('status', ['to_review', 'active', 'reviewed'])    
    table.boolean('is_deleted')
    table.dateTime("createdAt").notNull()
    table.dateTime("updatedAt").nullable()
    table.dateTime("deletedAt").nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('socials')
}
