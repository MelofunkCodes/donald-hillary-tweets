import React from 'react';
import moment from 'moment';

const soapboxSrc = {
  realDonaldTrump: 'https://user-images.githubusercontent.com/22921878/34544887-fe6c2d4a-f0b6-11e7-832e-9cab74a354b0.gif',
  HillaryClinton: 'https://user-images.githubusercontent.com/22921878/34544890-088daa56-f0b7-11e7-885d-cc8978788f5e.gif',
};

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
            &nbsp;&nbsp;{tweet.favorite_count.toLocaleString()}
          </div>
          <div>
            <i className="fa fa-retweet" aria-hidden="true" />
            &nbsp;&nbsp;{tweet.retweet_count.toLocaleString()}
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

    return (
      <div className="tweet-page">
        <div className="soapbox-image">
          <img
            src={soapboxSrc[screenName]}
            alt={`${screenName} on a soapbox`}
          />
          <h2>@{screenName}</h2>
        </div>
        <div className="tweets">
          {tweets.map(this.renderTweet)}
        </div>
      </div>
    );
  }
}

export default User;
