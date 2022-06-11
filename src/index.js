import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import dummyTweets from './static/dummyData';


ReactDOM.render(
  <BrowserRouter>
    <App dummyTweets={dummyTweets} />
  </BrowserRouter>,
  document.getElementById('root')
);
