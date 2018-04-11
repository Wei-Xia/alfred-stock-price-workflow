const alfy = require("alfy");

alfy.fetch(`https://api.iextrading.com/1.0/stock/${alfy.input}/batch?types=quote`)
    .then(result => {

        const items  = [{
			"title": result.quote.symbol + ": " + result.quote.iexRealtimePrice.toFixed(2) + ", change: " + (result.quote.changePercent*100).toFixed(2)+"%",
			"subtitle": "Day Low/High: " + result.quote.low.toFixed(2) +" - " + result.quote.high.toFixed(2) + " | 52 Week Low/High: " + result.quote.week52Low.toFixed(2) +" - " + result.quote.week52High.toFixed(2),
			}];
		alfy.output(items);
    });