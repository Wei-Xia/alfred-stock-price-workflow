const alfy = require("alfy");

const apiToken = process.env.token;

alfy.fetch(`https://cloud.iexapis.com/v1/stock/${alfy.input}/quote?token=${apiToken}`)
	.then(result => {
		// console.log(result);
		const percentage = result.changePercent * 100;
		const items = [{
			"title": result.symbol + ": " + result.latestPrice,
			"subtitle": "Change: " + percentage.toFixed(2) + "% | 52 Week Low/High: " + result.week52Low.toFixed(2) + " - " + result.week52High.toFixed(2),
		}];
		alfy.output(items);
	});

		// ", change: " + (result.changePercent*100).toFixed(2)+"%"