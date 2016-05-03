twitter-friends-webtask
==================

Get the ids of a twitter user's friends.


## Create Your Own

```sh
npm run init -- YOUR@EMAIL.COM # Only needed the first time
# To create one where people should use their own token/secret
npm run create -- --secret CONSUMER=CONSUMER_KEY --secret SECRET=CONSUMER_SECRET
# Or one that will work with only a user id (but use all the auth from you)
npm run create -- --secret CONSUMER=CONSUMER_KEY --secret SECRET=CONSUMER_SECRET --secret token=ACCESS_TOKEN --secret tokenSecret=ACCESS_TOKEN_SECRET
# Your container name will be shown after you create the webtask
curl -s https://webtask.it.auth0.com/api/run/{CONTAINER_NAME}/twitter-friends?id=USER_ID
```


## Contributing

Only the [whitelisted webtask.io](https://tehsis.github.io/webtaskio-canirequire/) modules can be used.


## Tests

`npm run test`


## License

MIT
