import dotenv from 'dotenv'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI
const BOT_TOKEN = process.env.BOT_TOKEN
const CHANNEL_ID = process.env.CHANNEL_ID

export { MONGO_URI, BOT_TOKEN, CHANNEL_ID }
