/*
  external imports
*/

import React from 'react';
import ReactDOM from 'react-dom';

/*
  internal imports
*/

import O3LoginForm from './react-components/O3LoginForm/O3LoginForm';

/*
  app render
*/

ReactDOM.render(
  <O3LoginForm />,
  document.querySelectorAll('#rootElement')[0]
);
