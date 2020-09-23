# alfred-stock-price-workflow

> Get the real-time stock price from US stock market! (Dow Jones, Nasdaq, S&P 500) - stonks stonks stonks

## Install

Latest Version is **v1.1.2 (September 23, 2020)** - [Release Page](https://github.com/Wei-Xia/alfred-stock-price-workflow/releases)

or Download from this [direct link](https://github.com/Wei-Xia/alfred-stock-price-workflow/releases/download/1.0/Stock.alfredworkflow)

or via NPM

```
$ npm install --global alfred-real-time-stock-price
```

_Requires [Node.js](https://nodejs.org) 8+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/)._

## Step-by-Step Instructions

1. Go to [IEX Cloud website](https://iexcloud.io/s/da57dcd1) to register a new account.

2. In IEX Cloud console, copy your own API Tokens.

![002](/assets/002.jpg)

3. Download the `stock.alfredworkflow` file from this [direct link](https://github.com/Wei-Xia/alfred-stock-price-workflow/releases/download/1.0/Stock.alfredworkflow), and import into your Alfred app.

![001](/assets/001.jpg)

4. Add your token into this workflow's configuration and variables. Variable name must be `token`, and value is your token from IEX Cloud.

![003](/assets/003.jpg)

5. Type `stock AAPL` to test it out. The result is the latest price in subject, subtitle is the change in percentage and 52-week low & high price.

![01](/assets/usage.gif)


## API Library

- [IEX Cloud API Document - Stock](https://iexcloud.io/docs/api/#quote)

### API Example

#### Get quote detail from a symbol

```
https://cloud.iexapis.com/v1/stock/aapl/quote?token=${YOUR_TOKEN}
```

This API call will get the following response for stock `AAPL`.

Response:

```
{
    "symbol": "AAPL",
    "companyName": "Apple, Inc.",
    "primaryExchange": "NASDAQ",
    "calculationPrice": "iexlasttrade",
    "open": null,
    "openTime": null,
    "openSource": "official",
    "close": null,
    "closeTime": null,
    "closeSource": "official",
    "high": null,
    "highTime": 1599767376677,
    "highSource": "15 minute delayed price",
    "low": null,
    "lowTime": 1599765385646,
    "lowSource": "15 minute delayed price",
    "latestPrice": 113.465,
    "latestSource": "IEX Last Trade",
    "latestTime": "September 10, 2020",
    "latestUpdate": 1599767996317,
    "latestVolume": null,
    "iexRealtimePrice": 113.45,
    "iexRealtimeSize": 1,
    "iexLastUpdated": 1599768125766,
    "delayedPrice": null,
    "delayedPriceTime": null,
    "oddLotDelayedPrice": null,
    "oddLotDelayedPriceTime": null,
    "extendedPrice": null,
    "extendedChange": null,
    "extendedChangePercent": null,
    "extendedPriceTime": null,
    "previousClose": 117.32,
    "previousVolume": 176940455,
    "change": -3.855,
    "changePercent": -0.03286,
    "volume": null,
    "iexMarketPercent": 0.00636250051851494,
    "iexVolume": 1142855,
    "avgTotalVolume": 201473381,
    "iexBidPrice": 0,
    "iexBidSize": 0,
    "iexAskPrice": 0,
    "iexAskSize": 0,
    "iexOpen": null,
    "iexOpenTime": null,
    "iexClose": 113.465,
    "iexCloseTime": 1599767996317,
    "marketCap": 1967176744500,
    "peRatio": 34.19,
    "week52High": 137.98,
    "week52Low": 52.93,
    "ytdChange": 0.529584,
    "lastTradeTime": 1599768029914,
    "isUSMarketOpen": false
}
```

## License

MIT © [Wei Xia](http://weixia.dev/)

Contact: `hi#weixia.dev`
