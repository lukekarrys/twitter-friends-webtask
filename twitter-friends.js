'use latest'

const Twit = require('twit@2.2.3')
const log = console.log.bind(console)

module.exports = (ctx, cb) => {
  const {data} = ctx
  const {CONSUMER, SECRET, token, tokenSecret, id} = data

  if (!id || !token || !tokenSecret) {
    return cb(new Error('You must specify a user id, token, and tokenSecret'))
  }

  if (!CONSUMER || !SECRET) {
    return cb(new Error('You should create your webtask with the CONSUMER and SECRET'))
  }

  log(`Requesting user by id ${id}`)

  const T = new Twit({
    consumer_key: CONSUMER,
    consumer_secret: SECRET,
    access_token: token,
    access_token_secret: tokenSecret
  })

  T.get('friends/ids', {user_id: id, stringify_ids: true}, (err, data) => {
    cb(err, data)
  })
}
