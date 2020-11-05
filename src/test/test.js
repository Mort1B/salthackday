import Binance from 'binance-api-node';

const client = Binance();

const client2 = Binance({
  apiKey: 'CNx96cpm2C9sR922U9LMpmpA7Zr4HzFYm6rptSZ8OzYztVreAlhQG5pS5YOygkNU',
  apiSecret: 'LWMxOY5sT0AZvXRSPn1snDjOA0fCzl87O0IBB4NaiCKRbmrBfopt8IoZUEc2GDyP'
})

console.log(await client.prices())
/* client.ws.allTickers(tickers => {
  console.log(tickers)
})
*
*/