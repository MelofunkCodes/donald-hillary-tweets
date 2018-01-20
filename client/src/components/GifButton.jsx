import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';
import PropTypes from 'prop-types';

import gifSourcesByTwitterUsername from '../gifSources';

const propTypes = {
  username: PropTypes.string.isRequired,
};

const GifButton = (
  props,
  { store },
) => (
  <img
    className="button-choice"
    src={gifSourcesByTwitterUsername[props.username].gifButton}
    alt={`${props.username} gif`}
    onClick={() => {
      history.push(`/tweets/${props.username}`);

      store.dispatch({
        type: 'SELECT_USER',
        username: props.username,
      });
    }}
  />
);

GifButton.propTypes = propTypes;
GifButton.contextTypes = {
  store: PropTypes.object,
};


export default GifButton;
