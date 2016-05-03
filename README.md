twitter-friends-webtask
==================

Webtask to get the ids of a Twitter user's friends.

[![Build Status](https://travis-ci.org/lukekarrys/twitter-friends-webtask.png?branch=master)](https://travis-ci.org/lukekarrys/twitter-friends-webtask)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


## Create Your Own

```sh
 # Only needed the first time to initialize the webtask cli
npm run init -- YOUR@EMAIL.COM

# To create one where consumers should use their own access token/secret
npm run create -- \
  --secret CONSUMER=CONSUMER_KEY \
  --secret SECRET=CONSUMER_SECRET

# Or one that will work with only a user id (but use all the auth from you)
npm run create -- \
  --secret CONSUMER=CONSUMER_KEY \
  --secret SECRET=CONSUMER_SECRET \
  --secret token=ACCESS_TOKEN \
  --secret tokenSecret=ACCESS_TOKEN_SECRET

# Your container name will be shown after you create the webtask
# Depending on which of the above you used, you might need to supply token & tokenSecret here
curl -s https://webtask.it.auth0.com/api/run/{CONTAINER_NAME}/twitter-friends?id=USER_ID
```


## Contributing

Only the [whitelisted webtask.io](https://tehsis.github.io/webtaskio-canirequire/) modules can be used.


## Tests

`npm run test`


## License

MIT
