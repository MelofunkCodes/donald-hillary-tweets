import React from 'react';

import Soapbox from './Soapbox';
import Tweet from './Tweet';

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

  render() {
    if (!this.state.tweets) {
      return (<div className="tweet-page">LOADING...</div>);
    }

    const { tweets } = this.state;
    const screenName = this.props.params.username;

    return (
      <div className="tweet-page">
        <Soapbox screenName={screenName} />
        <div className="tweets">
          {tweets.map(tweet => (
            <Tweet
              key={tweet.id}
              tweet={tweet}
            />
          )
          )}
        </div>
      </div>
    );
  }
}

export default User;
