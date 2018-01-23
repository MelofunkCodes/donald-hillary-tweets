import React from 'react';
import { browserHistory as history } from 'react-router';
import PropTypes from 'prop-types';

import gifSourcesByTwitterUsername from '../gifSources';

const propTypes = {
  username: PropTypes.string.isRequired,
};

const GifButton = ({ username }) => (
  <img
    className="button-choice"
    src={gifSourcesByTwitterUsername[username].gifButton}
    alt={`${username} gif`}
    onClick={() => {
      history.push(`/tweets/${username}`);
    }}
  />
);

GifButton.propTypes = propTypes;


export default GifButton;
