<?php

include("../global.php");

?>
<html>
	<head>
		<title>Crypto Exchange Example</title>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
		<script src="resources/scripts/Chart.bundle.min.js"></script>
		<style>
		/* the docs report this helps with styling  */
		canvas {
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
		}
		</style>
	</head>
	<body>
		<div style="width:75%;">
			<canvas id="canvas"></canvas>

			<script>
			$.ajax({
				url: "api/exchange.php?exchange=1&trade=1",
				method: "GET",
				dataType: "json",
				success: function (data) {
					console.log(data);
					var ctx = document.getElementById("canvas").getContext("2d");
					window.myLine = Chart.Line(ctx, {
						data: data,
						options: {
							responsive: true,
							hoverMode: 'index',
							stacked: false,
							title:{
								display: true,
								text: data.chartTitle
							},
							scales: {
								yAxes: [{
									type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
									display: true,
									position: "left",
									id: "y-axis-1",
								}, {
									type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
									display: true,
									position: "right",
									id: "y-axis-2",

									// grid line settings
									gridLines: {
										drawOnChartArea: false, // only want the grid lines for one axis to show up
									},
								}],
							}
						}
					});
				}
			});
			</script>
		</div>
	</body>
</html>
