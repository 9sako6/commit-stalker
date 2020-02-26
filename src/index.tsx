import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import Header, { HEADER_ID } from './components/Header';
// import Footer, { FOOTER_ID } from './components/Footer';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
