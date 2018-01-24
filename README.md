# Donald-Hillary Tweets

## Demo
https://donald-hillary-tweets.herokuapp.com

## Intro
A simple UI using React-Redux to show the latest tweets from Donald Trump or Hillary Clinton.

A Node server was set-up with 
express.js to proxy the requests made to the Twitter API. The npm package `twitter` was used
to pass the oauth 1.0 params to the Twitter API and retrieve the tweets. 

React-Redux was used to manage state, and Redux-Saga was used to handle the asynchronous call of 
fetching the tweets from the express server. 

<br> 

----
## To run locally:

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
<br>

----
## Acknowledgement
👏👏👏Credits to [Animatron](https://www.animatron.com/) for the gifs of Donald and Hillary. 

