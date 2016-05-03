import test from 'tape'

// Override default require to allow for @x.y.z syntax
// Also, webtask needs to use 'require' here instead of ES6
// import because of babel (I think)
require('webtask-require-version')
const friends = require('./twitter-friends')

const userId = '26007452'
let config = {}

try {
  config = require('./config')
} catch (e) {
  config = {}
}

test('Errors without a user/token/secret', (t) => {
  friends({data: {}}, (err, res) => {
    t.ok(err, 'has an error')
    t.ok(err instanceof Error, 'is an instance of error')
    t.equal(err.message, 'You must specify a user id, token, and tokenSecret')
    t.notOk(res, 'has no res')
    t.end()
  })
})

test('Errors without CONSUMER and SECRET', (t) => {
  friends({data: {id: userId, token: 'sdfsdf', tokenSecret: 'sdfsdf'}}, (err, res) => {
    t.ok(err, 'has an error')
    t.ok(err instanceof Error, 'is an instance of error')
    t.equal(err.message, 'You should create your webtask with the CONSUMER and SECRET')
    t.notOk(res, 'has no res')
    t.end()
  })
})

if (config.consumer_key) {
  test('Returns data with a token', (t) => {
    friends({data: {
      id: userId,
      CONSUMER: config.consumer_key,
      SECRET: config.consumer_secret,
      token: config.access_token,
      tokenSecret: config.access_token_secret
    }}, (err, data) => {
      t.notOk(err, ' no error')

      t.ok(data.ids, 'has ids')
      t.ok(Array.isArray(data.ids), 'ids is an array')
      t.ok(data.ids.length > 10, 'has more than 10 friends')
      t.ok(data.ids.indexOf('76543') > -1)

      t.end()
    })
  })
}
