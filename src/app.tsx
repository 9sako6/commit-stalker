import React from 'react';
import ReactDOM from 'react-dom';
import Header, { HEADER_ID } from './components/Header';
import Footer, { FOOTER_ID } from './components/Footer';
import RequestLeftCard, { REQUEST_LEFT_CARD_ID } from './components/RequestLeftCard';
// css
import './app.scss';

// header
ReactDOM.render(
  <Header />,
  document.getElementById(HEADER_ID)
);
// request left card
ReactDOM.render(
  <RequestLeftCard />,
  document.getElementById(REQUEST_LEFT_CARD_ID)
);
// footer
ReactDOM.render(
  <Footer />,
  document.getElementById(FOOTER_ID)
);