/*
	external imports
*/

import {connect} from 'react-redux';

/*
	internal imports
*/

import { login_submit, usrValue_change, passValue_change } from '../../actionCreators';
import RegisterForm from './RegisterForm';

/*
	dispatches
*/

const mapDispatchToProps = function(dispatch) {
	return {
		handle_register_submit: (data) => {
			//
		},
		handle_usrValue_change: (evt) => {
			//dispatch(usrValue_change(evt.target.value));
		},
		handle_passValue_change: (evt) => {
			//dispatch(passValue_change(evt.target.value));
		},
		handle_pass2Value_change: (evt) => {
			//dispatch(pass2Value_change(evt.target.value));
		}
	};
};

/*
	state
*/

const mapStateToProps = (state) => {
	return {
		usrValue: state.reducer.usrValue,
		passValue: state.reducer.passValue
	};
};

/*
	connect
*/

const RegisterFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

/*
	export
*/

export default RegisterFormContainer;
