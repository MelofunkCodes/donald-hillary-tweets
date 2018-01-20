import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    full_text: PropTypes.string.isRequired,
    favorite_count: PropTypes.number.isRequired,
    retweet_count: PropTypes.number.isRequired,
  }).isRequired,
};

const Tweet = ({
 tweet,
}) => {
  const tweetInUnixTime = moment(tweet.created_at, 'ddd MMM DD HH:mm:ss ZZ YYYY').unix();
  const tweetTimeInDateStringFormat = moment.unix(tweetInUnixTime).format('DD MMM YYYY hh:mm a');

  return (
    <div className="tweet">
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
};

Tweet.propTypes = propTypes;

export default Tweet;
