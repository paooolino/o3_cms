/*
  internal imports
*/

import * as actions from './actionTypes';

/*
  initial state
*/

const initialState = {
	usrValue: '',
	passValue: ''
};

/*
  the reducer
*/

export default (state=initialState, action) => {
	switch(action.type) {
		case actions.LOGIN_SUBMIT:
			return state;
		
		case actions.USRVALUE_CHANGE:
			return Object.assign({}, state, {
				usrValue: action.v
			});
			
		case actions.PASSVALUE_CHANGE:
			return Object.assign({}, state, {
				passValue: action.v
			});
			
		default:
			return state;
	}
};
