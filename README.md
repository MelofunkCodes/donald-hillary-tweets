# Donald-Hillary Tweets

A simple UI using React to show the latest tweets from Donald Trump or Hillary Clinton.

Demo can be viewed here: https://donald-hillary-tweets.herokuapp.com

A Node server was set-up with 
express.js to proxy the requests made to the Twitter API. The npm package `twitter` was used
to pass the oauth 1.0 params to the Twitter API and retrieve the tweets. 

### To run locally:

In the main directory:

First clone the repo, and make sure all the dependencies are installed:
```bash
git clone git@github.com:MelofunkCodes/donald-hillary-tweets.git
npm install
```

Then just copy below in your terminal to run both the react-app (`npm run start:client`)
 and also the backend server (`npm run heroku-start`).
 ```bash
npm-run-all --parallel heroku-start start:client
```