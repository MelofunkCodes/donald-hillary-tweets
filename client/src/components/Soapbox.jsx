import React from 'react';
import PropTypes from 'prop-types';

import gifSourcesByTwitterUsername from '../gifSources';

const propTypes = {
  screenName: PropTypes.string.isRequired,
};

const Soapbox = ({
  screenName,
}) => (
  <div className="soapbox-image">
    <img
      src={gifSourcesByTwitterUsername[screenName].soapboxGif}
      alt={`${screenName} on a soapbox`}
    />
    <a
      href={`https://twitter.com/${screenName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{screenName}
    </a>
  </div>
);

Soapbox.propTypes = propTypes;

export default Soapbox;
