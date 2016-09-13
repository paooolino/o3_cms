/*
  external imports
*/

import React from 'react';
import ReactDOM from 'react-dom';

/*
  internal imports
*/

import O3LoginForm from './components/O3LoginForm';

/*
  app render
*/

ReactDOM.render(
  <O3LoginForm id="testform" />,
  document.querySelectorAll('#rootElement')[0]
);
