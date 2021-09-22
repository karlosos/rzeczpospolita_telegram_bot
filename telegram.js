import { Telegraf } from 'telegraf'
import { BOT_TOKEN, CHANNEL_ID } from './env.js'

const bot = new Telegraf(BOT_TOKEN)

bot.launch()

const prepareMessage = (itemData) => {
  console.log('Send message | ', itemData.title)
  return `<b>${itemData.title}</b>

<i>${itemData.description}</i>

<a href="${itemData.link}">Artykuł</a>
`
}

async function sendMessage (itemData) {
  try {
    await bot.telegram.sendMessage(CHANNEL_ID, prepareMessage(itemData), { parse_mode: 'HTML' })
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

function stopBot (flag) {
  if (flag === 'SIGINT') {
    bot.stop('SIGINT')
  } else {
    bot.stop('SIGTERM')
  }
}

export { sendMessage, stopBot }
