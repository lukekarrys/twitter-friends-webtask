twitter-friends-webtask
==================

Webtask to get the ids of a Twitter user's friends.


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
