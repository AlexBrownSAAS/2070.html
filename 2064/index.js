const express = require('express')
const app = express()
const port = 1512

let bot = {}
bot.x = 100;
bot.y = 200;

app.get('/', (req, res) => {
  res.send('Hello Universe!!')
})

app.get('/bots', (req, res) => {
	x = req.query.x;
	y = req.query.y;
	bot.x = x || bot.x;
	bot.y = y || bot.y;
	let theBots = JSON.stringify(bot);
  res.send(theBots)
})

app.listen(port, () => {
  console.log(`Game Server app listening at http://seattleacademy.software:${port}`)
})
