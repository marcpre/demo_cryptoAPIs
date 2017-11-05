
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('alerts', (table) => {
    table.increments()
    table.integer('user_id')
    table.float('percent_increase') // 0 = disabled
    table.float('percent_decrease') // 0 = disabled
    table.integer('exchange_id')
    table.integer('trade_id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('alerts')
}
