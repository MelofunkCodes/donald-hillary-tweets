import React from 'react';
import { browserHistory as history } from 'react-router';
import PropTypes from 'prop-types';

import gifSourcesByTwitterUsername from '../gifSources';
import { selectUser } from '../actions/index';

const propTypes = {
  username: PropTypes.string.isRequired,
};

const GifButton = (
  { username },
  { store },
) => (
  <img
    className="button-choice"
    src={gifSourcesByTwitterUsername[username].gifButton}
    alt={`${username} gif`}
    onClick={() => {
      history.push(`/tweets/${username}`);

      store.dispatch(selectUser(username));
    }}
  />
);

GifButton.propTypes = propTypes;
GifButton.contextTypes = {
  store: PropTypes.object,
};


export default GifButton;
