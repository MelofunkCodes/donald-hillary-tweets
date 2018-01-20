import React from 'react';
import moment from 'moment';

import Soapbox from './Soapbox';

class User extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.fetchTweets = this.fetchTweets.bind(this);
  }

  componentDidMount() {
    this.fetchTweets();
  }

  fetchTweets() {
    fetch(`/getTweets/${this.props.params.username}`)
      .then(response => response.json())
      .then(tweets => this.setState({ tweets }));
  }

  renderTweet(tweet) {
    const tweetInUnixTime = moment(tweet.created_at, 'ddd MMM DD HH:mm:ss ZZ YYYY').unix();
    const tweetTimeInDateStringFormat = moment.unix(tweetInUnixTime).format('DD MMM YYYY hh:mm a');

    return (
      <div key={tweet.id} className="tweet">
        <div className="tweet-header">
          <div className="tweet-user-name">{tweet.user.name}</div>
          <div className="tweet-created-at">{tweetTimeInDateStringFormat}</div>
        </div>
        <div className="tweet-text">
          {tweet.full_text}
        </div>
        <div className="tweet-footer">
          <div className="tweet-footer-counts">
            <i className="fa fa-heart-o" aria-hidden="true" />
            {tweet.favorite_count.toLocaleString()}
          </div>
          <div>
            <i className="fa fa-retweet" aria-hidden="true" />
            {tweet.retweet_count.toLocaleString()}
          </div>
        </div>
      </div>
    );
  }
  render() {
    if (!this.state.tweets) {
      return (<div className="tweet-page">LOADING...</div>);
    }

    const { tweets } = this.state;
    const screenName = this.props.params.username;

    console.log(`screenName: ${screenName}`);

    return (
      <div className="tweet-page">
        <Soapbox screenName={screenName} />
        <div className="tweets">
          {tweets.map(this.renderTweet)}
        </div>
      </div>
    );
  }
}

export default User;
