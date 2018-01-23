import React, { Component } from 'react';
import { connect } from 'react-redux';

import Soapbox from './Soapbox';
import Tweet from './Tweet';
import { fetchTweets } from '../actions/index';

const mapStateToProps = state => ({
  state, //state.currentUser is not working...
  tweets: state.tweets,
});

const mapDispatchToProps = {
  fetchTweets,
};

class User extends Component {
  componentDidMount() {
    console.log(`state: ${JSON.stringify(this.props.state, false, 2)}`);

    console.log(`this.props.username: ${this.props.params.username}`);
    this.props.fetchTweets(this.props.params.username);
  }

  render() {
    const { tweets } = this.props.tweets;
    const screenName = this.props.params.username;
    console.log(`this.props: ${JSON.stringify(this.props, false, 2)}`);
    
    if (tweets.length === 0) {
      return (<div className="tweet-page">LOADING...</div>);
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(User);
