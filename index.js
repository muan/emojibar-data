const metadata = require('unicode-emoji-json')
const keywordSet = require('emojilib')
const data = []

for (const key in metadata) {
  const emoji = {}

  emoji['name'] = metadata[key]['name']
  emoji['slug'] = metadata[key]['slug']
  emoji['group'] = metadata[key]['group']
  emoji['emoji_version'] = Number(metadata[key]['emoji_version'])
  emoji['unicode_version'] = Number(metadata[key]['unicode_version'])
  emoji['skin_tone_support'] = metadata[key]['skin_tone_support']
  emoji['value'] = key
  emoji['keywords'] = keywordSet[key]
  data.push(emoji)
}

require('fs').writeFileSync('./dist/index.json', JSON.stringify(data))
