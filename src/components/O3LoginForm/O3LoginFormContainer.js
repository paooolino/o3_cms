/*
	external imports
*/

import {connect} from 'react-redux';

/*
	internal imports
*/

import O3LoginForm from './O3LoginForm';

/*
	dispatches
*/

const mapDispatchToProps = function(dispatch) {
	return {
		handleSubmit: (e) => {
			e.preventDefault();
			console.log('submitting');
		}
	};
};

/*
	state
*/

const mapStateToProps = (state) => {
	return {
		//
	};
};

/*
	connect
*/

const O3LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(O3LoginForm);

/*
	export
*/

export default O3LoginFormContainer;
