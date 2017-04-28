require('dotenv').config()

const test = require('tape')
const friends = require('./twitter-friends')

const userId = '26007452'

test('Errors without a user/token/secret', (t) => {
  friends({data: {}}, (err, res) => {
    t.ok(err, 'has an error')
    t.ok(err instanceof Error, 'is an instance of error')
    t.equal(err.message, 'You must specify an id, token, and secret')
    t.notOk(res, 'has no res')
    t.end()
  })
})

test('Errors without CONSUMER and SECRET', (t) => {
  friends({data: {id: userId, token: 'sdfsdf', secret: 'sdfsdf'}}, (err, res) => {
    t.ok(err, 'has an error')
    t.ok(err instanceof Error, 'is an instance of error')
    t.equal(err.message, 'You should create your webtask with the CONSUMER_KEY and CONSUMER_SECRET')
    t.notOk(res, 'has no res')
    t.end()
  })
})

const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET
} = process.env

if (ACCESS_TOKEN && ACCESS_TOKEN_SECRET) {
  test('Returns data with a token', (t) => {
    friends({data: {
      id: userId,
      CONSUMER_KEY: CONSUMER_KEY,
      CONSUMER_SECRET: CONSUMER_SECRET,
      ACCESS_TOKEN: ACCESS_TOKEN,
      ACCESS_TOKEN_SECRET: ACCESS_TOKEN_SECRET
    }}, (err, data) => {
      t.notOk(err, ' no error')

      t.ok(data.ids, 'has ids')
      t.ok(Array.isArray(data.ids), 'ids is an array')
      t.ok(data.ids.length > 10, 'has more than 10 friends')
      t.ok(data.ids.indexOf('76543') > -1, 'contains this id')

      t.end()
    })
  })
}
