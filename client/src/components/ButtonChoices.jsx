import React from 'react';
import { browserHistory as history } from 'react-router';

class ButtonChoices extends React.Component {
  handleClick(username) {
    history.push(`/tweets/${username}`);
  }

  render() {
    return (
      <div className="home-page">
        <div className="button-box">
          <img
            className="button-choice"
            src="https://user-images.githubusercontent.com/22921878/34543388-9cd4ab50-f0ae-11e7-85cf-16149b663883.gif"
            alt="Donald gif"
            onClick={this.handleClick.bind(this, 'realDonaldTrump')}
          />
          <img
            className="button-choice"
            src="https://user-images.githubusercontent.com/22921878/34543432-c791607c-f0ae-11e7-915c-231df1c8961d.gif"
            alt="Hillary gif"
            onClick={this.handleClick.bind(this, 'HillaryClinton')}
          />
        </div>
        <div>
          <h2>Pick your tweet poison...</h2>
        </div>
      </div>
    );
  }
}

export default ButtonChoices;
