const express = require('express');
const morgan = require('morgan');
const path = require('path');
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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/getTweets/:screen_name', (request, response) => {
  client.get('statuses/user_timeline', {
  screen_name: request.params.screen_name,
  tweet_mode: 'extended',
  // count: 200,
})
  .then(tweets => response.json(tweets))
.catch(error => console.log(error));
});

/*
 The "catchall" handler: for any request that doesn't
 match one above, send back React's index.html file.
  */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


// Listen
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Web server is listening on http://localhost:${port}`);
});
