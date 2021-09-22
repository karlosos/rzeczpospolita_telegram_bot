import { getFeedItems } from "./rss.js"
import { sendMessage, stopBot } from "./telegram.js"
import { connect, saveItems, filterNewItems, closeConnection } from "./db.js"

const RSS_URL = "https://www.rp.pl/rss_main"

async function main() {
    await connect()
    const feedItems = await getFeedItems(RSS_URL)
    console.log(feedItems.length, 'items in list')
    const newItems = await filterNewItems(feedItems)
    console.log(newItems.length, 'new items')
    const itemsSentToChannel = []
    for (const item of newItems) {
        if (await sendMessage(item)) {
            itemsSentToChannel.push(item)
        } else {
            console.log('Could not send item', item.title)
        }
    }
    console.log('Sent', itemsSentToChannel.length, 'messages')
    await saveItems(itemsSentToChannel)
    await closeConnection()
    await stopBot('SIGINT')
}

main()