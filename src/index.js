/*
  external imports
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/*
  internal imports
*/

import reducer from './reducer';
import MainLayout from './layout/MainLayout';
import PHome from './layout/PHome';
import PLogin from './layout/PLogin';
import PRegister from './layout/PRegister';
import PLostPassword from './layout/PLostPassword';
import PDashboard from './layout/PDashboard';

/*
	store setup
*/

let store = createStore(combineReducers({
	reducer,
	routing: routerReducer
}));
let history = syncHistoryWithStore(browserHistory, store)

//store.subscribe(() =>	console.log(store.getState()));

/*
  app render
*/

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={MainLayout}>
				<IndexRoute component={PHome} />
				<Route path="login" component={PLogin} />
				<Route path="register" component={PRegister} />
				<Route path="lost-password" component={PLostPassword} />
				<Route path="dashboard" component={PDashboard} />
			</Route>
		</Router>
	</Provider>,
	document.querySelectorAll('#rootElement')[0]
);


