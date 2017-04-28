'use latest'

const Twit = require('twit')

module.exports = (ctx, cb) => {
  const {
    data: {
      id,
      CONSUMER_KEY,
      CONSUMER_SECRET,
      ACCESS_TOKEN,
      token,
      ACCESS_TOKEN_SECRET,
      secret
    }
  } = ctx

  const useToken = token || ACCESS_TOKEN
  const useSecret = secret || ACCESS_TOKEN_SECRET

  if (!id || !useToken || !useSecret) {
    return cb(new Error('You must specify an id, token, and secret'))
  }

  if (!CONSUMER_KEY || !CONSUMER_SECRET) {
    return cb(new Error('You should create your webtask with the CONSUMER_KEY and CONSUMER_SECRET'))
  }

  new Twit({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    access_token: useToken,
    access_token_secret: useSecret
  })
  .get('friends/ids', {user_id: id, stringify_ids: true}, cb)
}
