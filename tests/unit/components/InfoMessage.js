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

import InfoMessage from '../../../src/components/InfoMessage/InfoMessage';

/**
	An helper function to build an Enzyme wrapper around the component.
*/

const createWrapper = (attrs) => {

	/**
		This is the default state for the component.
	*/

	const defaultState = {
		message: '',
		buttonText: 'Ok',
		
		confirm_handler: function(){}
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
		<InfoMessage {...state}	/>
	);
}

/**
	This is where the Mocha describe blocks begin.
	Each describe block may have other describe blocks inside.
	The single tests are defined by the "it" blocks.
*/

describe('InfoMessage', function(){
	
	/**
		The rendering section tests the existence of dom elements
		and how they look or behave by checking their props.
	*/
	
	describe('Rendering', function(){
		
		const defaultWrapper = createWrapper({message: 'Welcome!'});
		
		it('should render the specified text', function(){
			expect(defaultWrapper.find('div.message').text()).toBe('Welcome!');
		});
		it('should render the confirm button', function(){
			expect(defaultWrapper.find('button[name="confirm"]').length).toBe(1);
		});
		it('should render the confirm button text', function(){
			expect(defaultWrapper.find('button[name="confirm"]').text()).toBe('Ok');
		});
	});
	
	/**
		In the behavious section we check if the handlers are called with proper arguments.
		We set a unique controlled_fields_handler function to be called for every field.
	*/
	
	describe('Behaviour', function(){
		it('should call the confirm_handler function', function(){
			const confirm_handler = expect.createSpy();
			createWrapper({confirm_handler}).find('button[name="confirm"]').simulate('click');
			expect(confirm_handler).toHaveBeenCalled();
		});
	});
});
