const express = require('express');
const morgan = require('morgan');
const Twitter = require('twitter');

const twitterKeys = require('./twitter-keys');

const client = new Twitter({
  consumer_key: twitterKeys.consumer_key,
  consumer_secret: twitterKeys.consumer_secret,
  access_token_key: twitterKeys.access_token_key,
  access_token_secret: twitterKeys.access_token_secret,
});

const app = express();

// Middleware that logs every request made to web server
app.use(morgan('dev'));

app.get('/getTweets/:screen_name', (request, response) => {
  client.get('statuses/user_timeline', {
  screen_name: request.params.screen_name,
  tweet_mode: 'extended',
  // count: 200,
})
  .then(tweets => response.json(tweets))
.catch(error => console.log(error));
});


// Listen
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Web server is listening on http://localhost:${port}`);
});
