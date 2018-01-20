import React from 'react';

import GifButton from './GifButton';

const ButtonChoices = () => (
  <div className="home-page">
    <div className="button-box">
      <GifButton username="realDonaldTrump" />
      <GifButton username="HillaryClinton" />
    </div>
    <div>
      <h2>Pick your tweet poison...</h2>
    </div>
  </div>
);

export default ButtonChoices;
