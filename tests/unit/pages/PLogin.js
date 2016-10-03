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
	This is the component page to test.
*/

import LoginForm from '../../../src/components/LoginForm/LoginForm';
import PLogin from '../../../src/pages/PLogin';

/**
	Setup
*/

const pageWrapper = shallow(<PLogin />);

/**
	This is where the Mocha describe blocks begin.
	Each describe block may have other describe blocks inside.
	The single tests are defined by the "it" blocks.
*/

describe('PLogin', function(){
	
	it('should render the login form', function(){
		expect(pageWrapper.find(LoginForm).length).toBe(1);
	});

});
