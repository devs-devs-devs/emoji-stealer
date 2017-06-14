const http = require('follow-redirects').https
const fs = require('fs-extra')

fs.readFileSync('./emojis.txt').toString().split('\n').forEach(emojiPath => {

    let line = emojiPath.split('/')
    let diskPath = `emojis/${line[4]}.png`

    // If its an apple emoji who gives a flying fuck
    if (line[2] !== 'emoji.slack-edge.com') return

    if (!fs.existsSync(diskPath)) {
        let file = fs.createWriteStream(diskPath)
        http.get(emojiPath, res => {
            res.pipe(file)
            file.on('finish', () => file.close())
        }).on('error', err => console.log(emojiPath, err))
    }

})