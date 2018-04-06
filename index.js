const alfy = require("alfy");

alfy.fetch(`https://api.iextrading.com/1.0/stock/${alfy.input}/batch?types=quote`)
    .then(result => {

        const items  = [{
			"title": result.quote.symbol + ": " + result.quote.close + ", change: " + result.quote.changePercent*100+"%",
			"subtitle": "Today high: " + result.quote.high +", Today Low: " + result.quote.low,
			}];
		alfy.output(items);
    });