const alfy = require("alfy");

const apiToken = process.env.token;

alfy
  .fetch(
    `https://cloud.iexapis.com/v1/stock/${
      alfy.input
    }/quote?token=${apiToken.trim()}`
  )
  .then((result) => {
    const percentage = (result.changePercent * 100).toFixed(2);
    const week52Low = result.week52Low.toFixed(2);
    const week52High = result.week52High.toFixed(2);
    const extendedChange = (result.extendedChangePercent * 100).toFixed(2);
    let emoji = "📈";

    if (percentage < 0) {
      emoji = "📉";
    }

    const items = [
      {
        title:
          result.symbol +
          ": " +
          result.latestPrice +
          " | Change: " +
          percentage +
          "%" +
          emoji,
        subtitle:
          "Extended Change Percent:" +
          extendedChange +
          "% | 52 Week Low/High: " +
          week52Low +
          " - " +
          week52High,
      },
    ];
    alfy.output(items);
  })
  .catch((err) => {
    alfy.error("Stock Is " + err.statusMessage);
  });
