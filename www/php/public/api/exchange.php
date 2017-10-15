<?php

include("../../global.php");


$exchange = $database->real_escape_string(@$_GET["exchange"]);
$trade = $database->real_escape_string(@$_GET["trade"]);

if ($exchange == null || $trade == null) {
	exit();
}

$labels = [];

$buy = [
	"label" => "Buy",
	"borderColor" => "rgb(255, 159, 64)",
	//"backgroundColor" => "rgb(255, 159, 64)",
	"data" => [],
	"file" => false

];

$sell = [
	"label" => "Sell",
	"borderColor" => "rgb(75, 192, 192)",
	//"backgroundColor" => "rgb(75, 192, 192)",
	"data" => [],
	"file" => false

];

$volume = [
	"label" => "Volume",
	"borderColor" => "rgb(255, 99, 132)",
	//"backgroundColor" => "rgb(255, 99, 132)",
	"data" => [],
	"file" => false

];


$query = "
	SELECT cryptotrade_id, exchange_id, sell_price, buy_price, volume, created_at
	FROM ticker_data
	WHERE cryptotrade_id={$trade} AND exchange_id={$exchange}
	GROUP BY minute(created_at), hour(created_at), day(created_at)
	ORDER BY created_at
	LIMIT 1440;";

$results = $database->query($query);

while ($row = $results->fetch_assoc()) {
	$labels[] = date("m-d H:i", strtotime($row["created_at"]));
	$buy["data"][] = $row["buy_price"];
	$sell["data"][] = $row["sell_price"];
	$volume["data"][] = $row["volume"];

	//print_r($row);
}

$datasets = [$buy, $sell, $volume];

$exchange_meta = $database->query("SELECT name FROM exchanges WHERE id = {$exchange}")->fetch_assoc();
$trade_meta = $database->query("SELECT crypto_currency,country_currency FROM cryptotrades WHERE id = {$trade}")->fetch_assoc();

$title = "{$exchange_meta["name"]} - {$trade_meta["crypto_currency"]}/{$trade_meta["country_currency"]}";

$result = [
	"chartTitle" => $title,
	"labels" => $labels,
	"datasets" => $datasets
];

echo json_encode($result);

/*

				labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    borderColor: window.chartColors.red,
                    backgroundColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                    fill: false,
                }, {
                    label: "My Second dataset",
                    borderColor: window.chartColors.blue,
                    backgroundColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                    fill: false,
                }]
*/
