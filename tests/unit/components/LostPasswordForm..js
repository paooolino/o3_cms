/**
	React is required by Enzyme rendering functions.
*/

import React from 'react';

/**
	We'll use shallow from enzyme to test the components.
*/

import { shallow } from 'enzyme';

/**
	Assertion library
*/

import expect from 'expect';

/**
	This is the functional stateless component to test.
*/

import LostPasswordForm from '../../../src/components/LostPasswordForm/LostPasswordForm';

/**
	An helper function to build an Enzyme wrapper around the component.
*/

const createWrapper = (attrs) => {

	/**
		This is the default state for the component.
	*/

	const defaultState = {
		isSubmitting: false,
		errorMessage: '',
		controlledFieldsValues: {
			email: ''
		},
		submit_handler: function(){},
		controlled_fields_handler: function(){}
	};

	/**
		If input attributes exists, we modify the default values for the state.
	*/
	
	const state = {
		...defaultState,
		...attrs
	};

	/**
		Return the Enzyme shallow wrapper.
	*/
	
	return shallow(
		<LostPasswordForm {...state}	/>
	);
}

/**
	This is where the Mocha describe blocks begin.
	Each describe block may have other describe blocks inside.
	The single tests are defined by the "it" blocks.
*/

describe('LostPasswordForm', function(){
	
	/**
		The rendering section tests the existence of dom elements
		and how they look or behave by checking their props.
	*/
	
	describe('Rendering', function(){
		
		const defaultWrapper = createWrapper();
		const submittingWrapper = createWrapper({isSubmitting: true});
		const errorWrapper = createWrapper({errorMessage: 'My awesome error'});
		const controlledWrapper = createWrapper({controlledFieldsValues: {
			email: 'my@example.com'
		}});
		
		it('should render the email field', function(){
			expect(defaultWrapper.find('input[name="email"]').length).toBe(1);
		});
		it('should render the send button', function(){
			expect(defaultWrapper.find('button[name="send"]').length).toBe(1);
		});
		it('should disable the send button when submitting', function(){
			expect(defaultWrapper.find('button[name="send"]').prop('disabled')).toBe(false);
			expect(submittingWrapper.find('button[name="send"]').prop('disabled')).toBe('disabled');
		});
		it('should render the loading icon only when submitting', function(){
			expect(defaultWrapper.find('img.loadingIcon').length).toBe(0);
			expect(submittingWrapper.find('img.loadingIcon').length).toBe(1);
		});
		it('should render an error message only if something went wrong', function(){
			expect(defaultWrapper.find('.errorMessage').length).toBe(0);
			expect(errorWrapper.find('.errorMessage').text()).toBe('My awesome error');
		});
		it('should render the correct values in controlled inputs', function(){
			expect(controlledWrapper.find('input[name="email"]').props().value).toBe('my@example.com');
		});
	});
	
	/**
		In the behavious section we check if the handlers are called with proper arguments.
		We set a unique controlled_fields_handler function to be called for every field.
	*/
	
	describe('Behaviour', function(){
		it('should call the submit_handler function', function(){
			const submit_handler = expect.createSpy();
			createWrapper({submit_handler}).find('button[name="send"]').simulate('click');
			expect(submit_handler).toHaveBeenCalled();
		});
		it('should call the controlled_fields_handler function on email field', function(){
			const controlled_fields_handler = expect.createSpy();
			createWrapper({controlled_fields_handler}).find('input[name="email"]').simulate('change');
			expect(controlled_fields_handler).toHaveBeenCalled();			
		});
	});	
});
