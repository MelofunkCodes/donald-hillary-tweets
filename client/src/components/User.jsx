import React, { Component } from 'react';
import { connect } from 'react-redux';

import Soapbox from './Soapbox';
import Tweet from './Tweet';
import Loading from './Loading';
import { fetchTweets } from '../actions/index';

const mapStateToProps = state => ({
  tweets: state.tweets,
});

const mapDispatchToProps = {
  fetchTweets,
};

class User extends Component {
  componentDidMount() {
    const { username } = this.props.params;
    this.props.fetchTweets(username);
  }

  render() {
    const { tweets } = this.props;
    const screenName = this.props.params.username;

    return (tweets.length !== 0) ? (
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
    ) : <Loading />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
