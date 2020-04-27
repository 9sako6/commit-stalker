import React from 'react';
import './index.css';
import Header from './components/header';
import Message from './components/Message';
// css
import './app.scss';

export default () => (
  <>
    <Header />
    <div className="page-info-wrap"></div>
    <div id="commit-history"></div>
    <div className="page-info-wrap"></div>
    <Message />
  </>
);
