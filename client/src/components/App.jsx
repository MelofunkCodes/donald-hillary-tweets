import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const App = props => (
  <div className="main-app">
    <header className="main-header">
      <h1><Link to="/">Donald-Hillary Tweets</Link></h1>
      <div className="header-buttons">
        <Link to="/">
          <i className="fa fa-home fa-2x" aria-hidden="true" />
        </Link>
        <a
          href="https://github.com/MelofunkCodes/donald-hillary-tweets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fa-2x" aria-hidden="true" />
        </a>
      </div>
    </header>
    <main className="main-content">
      {props.children}
    </main>
  </div>
);

App.propTypes = propTypes;

export default App;
