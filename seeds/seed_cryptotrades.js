
exports.seed = function(knex, Promise) {
	return knex("cryptotrades").del()
		.then(function () {
			return knex("cryptotrades").insert([
				{id: 1, crypto_currency: "BTC", country_currency: "USD"},
				{id: 2, crypto_currency: "DASH", country_currency: "USD"},
				{id: 3, crypto_currency: "LTC", country_currency: "USD"},
				{id: 4, crypto_currency: "NXT", country_currency: "USD"},
				{id: 5, crypto_currency: "STR", country_currency: "USD"},
				{id: 6, crypto_currency: "XMR", country_currency: "USD"},
				{id: 7, crypto_currency: "XRP", country_currency: "USD"},
				{id: 8, crypto_currency: "ETH", country_currency: "USD"},
				{id: 9, crypto_currency: "ETC", country_currency: "USD"},
				{id: 10, crypto_currency: "REP", country_currency: "USD"},
				{id: 11, crypto_currency: "ZEC", country_currency: "USD"},
				{id: 12, crypto_currency: "BCH", country_currency: "USD"},
				{id: 13, crypto_currency: "BTC", country_currency: "CNY"},
				{id: 14, crypto_currency: "LTC", country_currency: "CNY"},
				{id: 15, crypto_currency: "ETH", country_currency: "CNY"},
				{id: 16, crypto_currency: "BCC", country_currency: "CNY"},
				{id: 17, crypto_currency: "BCC", country_currency: "USD"},
				{id: 18, crypto_currency: "BTC", country_currency: "EUR"},
				{id: 19, crypto_currency: "BCH", country_currency: "EUR"},
				{id: 20, crypto_currency: "DASH", country_currency: "EUR"},
				{id: 21, crypto_currency: "ETC", country_currency: "EUR"},
				{id: 22, crypto_currency: "ETH", country_currency: "EUR"},
				{id: 23, crypto_currency: "LTC", country_currency: "EUR"},
				{id: 24, crypto_currency: "XMR", country_currency: "EUR"},
				{id: 25, crypto_currency: "XRP", country_currency: "EUR"},
				{id: 26, crypto_currency: "ZEC", country_currency: "EUR"},

			]);
		});
};
