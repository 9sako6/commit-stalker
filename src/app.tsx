import React from 'react';
import ReactDOM from 'react-dom';
import Header, { HEADER_ID } from './components/Header';
// css
import './app.scss';

// header
ReactDOM.render(
  <Header />,
  document.getElementById(HEADER_ID)
);
