import mongoose from 'mongoose'

import { MONGO_URI } from './env.js'

async function connect () {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true })
    console.log('MongoDB connected')
  } catch (err) {
    console.log(err)
  }
}

const ItemModel = mongoose.model('rssItems', new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  link: String,
  category: String,
  pubDate: String,
  author: String
}))

async function filterNewItems (items) {
  const newItems = []

  for (const item of items) {
    const searchResult = await ItemModel.find({
      id: item.guid
    })
    if (searchResult.length > 0) {
      // TODO: Update link in DB
    } else {
      newItems.push(item)
      console.log('Link not in DB | ', item.title)
    }
  }

  return newItems
}

async function saveItems (items) {
  for (const item of items) {
    const itemObj = new ItemModel({
      id: item.guid,
      title: item.title,
      description: item.description,
      link: item.link,
      category: item.category,
      pubDate: item.pubDate,
      author: item.author
    })
    await itemObj.save()
  }
}

async function closeConnection () {
  await mongoose.disconnect()
}

export { connect, filterNewItems, saveItems, closeConnection }
