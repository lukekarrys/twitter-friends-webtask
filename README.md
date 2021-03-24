twitter-friends-webtask
==================

Webtask to get the ids of a Twitter user's friends.

## Create Your Own

```sh
 # Only needed the first time to initialize the webtask cli
npm run init -- YOUR@EMAIL.COM

# Update with your Twitter app's credentials
#
# To create one where consumers should supply their own access token/secret
# only set CONSUMER_KEY and CONSUMER_SECRET
#
# Otherwise set all of them and the app will use all auth from your app
cp .env.example .env

# Create webtask
npm run create

# Your container name will be shown after you create the webtask
curl -s https://wt-{CONTAINER_NAME}.run.webtask.io/twitter-friends-webtask?id=USER_ID
# Or if you decided to supply a token and secret in the request
curl -s https://wt-{CONTAINER_NAME}.run.webtask.io/twitter-friends-webtask?id=USER_ID&token=TOKEN&secret=SECRET
```


## Contributing

To be run locally, this requires `node >= 6.0.0`. When deployed it uses `use latest` so `wt-cli` builds it with `babel`.


## Tests

`npm run test`


## License

MIT
