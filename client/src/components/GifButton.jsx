import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';
import PropTypes from 'prop-types';

import gifSourcesByTwitterUsername from '../gifSources';

const propTypes = {
  username: PropTypes.string.isRequired,
};

class GifButton extends Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { username } = this.props;

    return (
      <img
        className="button-choice"
        src={gifSourcesByTwitterUsername[username].gifButton}
        alt={`${username} gif`}
        onClick={() => {
          history.push(`/tweets/${username}`);

          store.dispatch({
            type: 'SELECT_USER',
            user: username,
          });
        }}
      />
    );
  }
}

GifButton.propTypes = propTypes;
GifButton.contextTypes = {
  store: PropTypes.object,
};


export default GifButton;
