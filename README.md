# alfred-stock-price-workflow
This is the workflow to get real-time stock price in US market.

I tried to find a workflow for stock price in Alfred, but couldn't find a one works for US market, neither out of date, nor no longer update.


## Response from API
```
{
    "quote": {
        "symbol": "AAPL",
        "companyName": "Apple Inc.",
        "primaryExchange": "Nasdaq Global Select",
        "sector": "Technology",
        "calculationPrice": "close",
        "open": 171.02,
        "openTime": 1523021400347,
        "close": 168.38,
        "closeTime": 1523044800156,
        "high": 172.48,
        "low": 168.2,
        "latestPrice": 168.38,
        "latestSource": "Close",
        "latestTime": "April 6, 2018",
        "latestUpdate": 1523044800156,
        "latestVolume": 34743599,
        "iexRealtimePrice": 168.35,
        "iexRealtimeSize": 111,
        "iexLastUpdated": 1523044799801,
        "delayedPrice": 168.47,
        "delayedPriceTime": 1523045261620,
        "previousClose": 172.8,
        "change": -4.42,
        "changePercent": -0.02558,
        "iexMarketPercent": 0.03523,
        "iexVolume": 1224017,
        "avgTotalVolume": 34083025,
        "iexBidPrice": 0,
        "iexBidSize": 0,
        "iexAskPrice": 0,
        "iexAskSize": 0,
        "marketCap": 854362308940,
        "peRatio": 17.31,
        "week52High": 183.5,
        "week52Low": 140.06,
        "ytdChange": 0.007224856537489812
    }
}
```