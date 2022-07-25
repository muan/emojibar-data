const metadata = require('unicode-emoji-json')
const keywordSet = require('emojilib')
const data = []

for (const key in metadata) {
  const emoji = metadata[key]
  emoji['value'] = key
  emoji['keywords'] = keywordSet[key]
  data.push(emoji)
}

require('fs').writeFileSync('./dist/index.json', JSON.stringify(data))
