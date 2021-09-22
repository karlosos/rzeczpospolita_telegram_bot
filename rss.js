import got from 'got'
import parser from 'fast-xml-parser'

async function getFeedItems (url) {
  const buffer = await got(url, {
    responseType: 'buffer',
    resolveBodyOnly: true,
    timeout: 5000,
    retry: 5
  })
  const feed = parser.parse(buffer.toString())
  const items = feed.rss.channel.item
  return items
}

export { getFeedItems }
