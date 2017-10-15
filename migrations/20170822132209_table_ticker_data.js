
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists("ticker_data", function (table) {
		table.increments();
		table.integer("cryptotrade_id");
		table.integer("exchange_id");
		table.decimal("sell_price", 50, 30);
		table.decimal("buy_price", 50, 30);
		table.decimal("volume", 50, 30);
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("ticker_data");
};
