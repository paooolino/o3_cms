/*
	external imports
*/

import fetch from 'isomorphic-fetch'

/*
	action string constants
*/

const SUBMIT = 'login/SUBMIT';
const USRVALUE_CHANGE = 'login/USRVALUE_CHANGE';
const PASSVALUE_CHANGE = 'login/PASSVALUE_CHANGE';
const FETCH = 'login/FETCH';
const SUCCESS = 'login/SUCCESS';
const FAILURE = 'login/FAILURE';

/*
	reducer
*/

const initialState = {
	usrValue: '',
	passValue: '',
	fetching: false,
	loggedIn: false,
	authToken: ''
};

export default (state=initialState, action) => {
	switch(action.type) {
		case FETCH:
			return Object.assign({}, state, {
				fetching: true
			});
		
		case USRVALUE_CHANGE:
			return Object.assign({}, state, {
				usrValue: action.v
			});
			
		case PASSVALUE_CHANGE:
			return Object.assign({}, state, {
				passValue: action.v
			});		
			
		case SUCCESS:
			return Object.assign({}, state, {
				fetching: false,
				loggedIn: true,
				authToken: action.authToken
			});
			
		case FAILURE:
			return Object.assign({}, state, {
				fetching: false,
				loggedIn: false,
				authToken: ''
			});
			
		default:
			return state;
	}
};

/*
	action creators
*/

export const login_submit = (usrValue, passValue) => {
	return (dispatch) => {
		dispatch(fetch());
		return fetch()
			.then(response => response.json())
			.then(json => {
				if(json.authCode) {
					dispatch(success(json.authCode))
				} else {
					dispatch(error(json));
				}
			})
			.catch(err => 
				dispatch(err.toString())
			);
	}
};

export const fetch() => {
	return {
		type: FETCH
	}
};

export const failure(error) => {
	return {
		type: FAILURE,
		error
	};
};

export const success(authCode) => {
	return {
		type: SUCCESS,
		authCode
	};
};

export const usrValue_change = (v) => {
	return {
		type: USRVALUE_CHANGE,
		v
	};
};

export const passValue_change = (v) => {
	return {
		type: PASSVALUE_CHANGE,
		v
	};
};
