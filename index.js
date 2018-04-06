'use strict';
const alfy = require('alfy');

alfy.fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=queryStock&interval=1min&apikey=6Y9PQIHEOZIX2K18', {
	queryStock: {
		q: alfy.input
	}
	
});