require('webtask-require-version')
const friends = require('./twitter-friends')
const config = require('./config')

friends({
  data: {
    id: '26007452',
    CONSUMER: config.consumer_key,
    SECRET: config.consumer_secret,
    token: config.access_token,
    tokenSecret: config.access_token_secret
  }
}, (err, data) => {
  console.log('Error', err)
  if (data) {
    console.log(JSON.stringify(data, null, 2))
  }
})
