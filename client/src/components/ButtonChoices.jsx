import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';
import PropTypes from 'prop-types';

class ButtonChoices extends Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;

    return (
      <div className="home-page">
        <div className="button-box">
          <img
            className="button-choice"
            src="https://user-images.githubusercontent.com/22921878/34543388-9cd4ab50-f0ae-11e7-85cf-16149b663883.gif"
            alt="Donald gif"
            onClick={() => {
              const username = 'realDonaldTrump';
              history.push(`/tweets/${username}`);

              store.dispatch({
                type: 'SELECT_USER',
                user: username,
              });
            }}
          />
          <img
            className="button-choice"
            src="https://user-images.githubusercontent.com/22921878/34543432-c791607c-f0ae-11e7-915c-231df1c8961d.gif"
            alt="Hillary gif"
            onClick={() => {
              const username = 'HillaryClinton';
              history.push(`/tweets/${username}`);

              store.dispatch({
                type: 'SELECT_USER',
                user: username,
              });
            }}
          />
        </div>
        <div>
          <h2>Pick your tweet poison...</h2>
        </div>
      </div>
    );
  }
}


/*
 Need to specify contextTypes to specify which context we want to receive (in this case, store
 from Provider). Context can be passed down to any level, without having been specified in the
 parent component. Almost like a wormhole. You just have to opt-in to the context by specifying
 contextTypes
  */
ButtonChoices.contextTypes = {
  store: PropTypes.object,
};


export default ButtonChoices;
