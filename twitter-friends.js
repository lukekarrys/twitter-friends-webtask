'use latest'

const Twit = require('twit@2.2.3')

module.exports = (ctx, cb) => {
  const {data} = ctx
  const {CONSUMER, SECRET, token, tokenSecret, id} = data

  if (!id || !token || !tokenSecret) {
    return cb(new Error('You must specify a user id, token, and tokenSecret'))
  }

  if (!CONSUMER || !SECRET) {
    return cb(new Error('You should create your webtask with the CONSUMER and SECRET'))
  }

  new Twit({
    consumer_key: CONSUMER,
    consumer_secret: SECRET,
    access_token: token,
    access_token_secret: tokenSecret
  })
  .get('friends/ids', {user_id: id, stringify_ids: true}, cb)
}
