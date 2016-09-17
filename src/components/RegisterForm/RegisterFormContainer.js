/*
	external imports
*/

import {connect} from 'react-redux';

/*
	internal imports
*/

import { register_submit, usrValue_change, passValue_change, pass2Value_change } from '../../redux/modules/register';
import RegisterForm from './RegisterForm';

/*
	dispatches
*/

const mapDispatchToProps = function(dispatch) {
	return {
		handle_register_submit: (usrValue, passValue) => {
			dispatch(register_submit(usrValue, passValue));
		},
		handle_usrValue_change: (evt) => {
			dispatch(usrValue_change(evt.target.value));
		},
		handle_passValue_change: (evt) => {
			dispatch(passValue_change(evt.target.value));
		},
		handle_pass2Value_change: (evt) => {
			dispatch(pass2Value_change(evt.target.value));
		}
	};
};

/*
	state
*/

const mapStateToProps = (state) => {
	return {
		usrValue: state.register.usrValue,
		passValue: state.register.passValue,
		pass2Value: state.register.pass2Value
	};
};

/*
	connect
*/

const RegisterFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);

/*
	export
*/

export default RegisterFormContainer;
