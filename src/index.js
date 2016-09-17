/*
  external imports
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/*
  internal imports
*/

import login from './redux/modules/login';
import register from './redux/modules/register';
//import lostPassword from './redux/modules/lostPassword';
import MainLayout from './layout/MainLayout';
import PHome from './layout/PHome';
import PLogin from './layout/PLogin';
import PRegister from './layout/PRegister';
import PLostPassword from './layout/PLostPassword';
import PDashboard from './layout/PDashboard';

/*
	combining reducers
*/

let store = createStore(combineReducers({
	login,
	register,
	//lostPassword,
	routing: routerReducer
}));
// store.subscribe(() =>	console.log(store.getState()));

/*
	sync route<=>store
*/

let history = syncHistoryWithStore(browserHistory, store);

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
