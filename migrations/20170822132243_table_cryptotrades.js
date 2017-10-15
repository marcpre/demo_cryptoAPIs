
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists("cryptotrades", function (table) {
		table.increments();
		table.string("crypto_currency"); // e.g. BTC, LTC, etc
		table.string("country_currency"); //e.g. USD, CYN, etc
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("cryptotrades");
};
