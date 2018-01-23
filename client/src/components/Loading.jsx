import React from 'react';

import gifSourcesByTwitterUsername from '../gifSources';

const Loading = () => (
  <div className="tweet-page-loading">
    <img
      src={gifSourcesByTwitterUsername.loading}
      alt="loading gif"
    />
    <p>Loading...</p>
  </div>
);

export default Loading;
