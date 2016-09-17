/*
	action string constants
*/

const SUBMIT = 'register/SUBMIT';
const USRVALUE_CHANGE = 'register/USRVALUE_CHANGE';
const PASSVALUE_CHANGE = 'register/PASSVALUE_CHANGE';
const PASS2VALUE_CHANGE = 'register/PASS2VALUE_CHANGE';

/*
	reducer
*/

const initialState = {
	usrValue: '',
	passValue: '',
	pass2Value: ''
};

export default (state=initialState, action) => {
	switch(action.type) {
		case SUBMIT:
			return state;
		
		case USRVALUE_CHANGE:
			return Object.assign({}, state, {
				usrValue: action.v
			});
			
		case PASSVALUE_CHANGE:
			return Object.assign({}, state, {
				passValue: action.v
			});

		case PASS2VALUE_CHANGE:
			return Object.assign({}, state, {
				pass2Value: action.v
			});
			
		default:
			return state;
	}
};

/*
	action creators
*/

export const register_submit = (usrValue, passValue) => {
	return {
		type: SUBMIT,
		usrValue,
		passValue
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

export const pass2Value_change = (v) => {
	return {
		type: PASS2VALUE_CHANGE,
		v
	};
};
