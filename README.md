# emoji-stealer

###Step 0:###

run `npm i` in this directory to install deps ofc u dummy

###Step 1:###

Run this on the page of the slack team that has all the emojis, example: https://their_team_name.slack.com/customize/emoji

```javascript
copy(Array.from(document.querySelectorAll('span[data-original]')).map(e => e.getAttribute('data-original')).join('\n'))
```

###Step 2:###

Paste the output into `emojis.txt` in this directory

###Step 3:###

Run `npm start` to download all the images. Some may throw some DNS errors, just keep smashing it until no output.

###Step 4:###

Install this chrome extension: https://chrome.google.com/webstore/detail/slack-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej

###Step 5:###

Open your team page where you want to import all the emojis from: https://your_team_name.slack.com/customize/emoji

###Step 6:###

Drag all the images from the `emojis/` folder into the big bulk upload box. Your computer might freeze so go make a coffee and come back in 10 minutes.

###Step 7:###

Start shitposting emojis in all channels to raise awareness