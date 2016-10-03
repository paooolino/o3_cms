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

import PHome from '../../../src/pages/PHome';

/**
	Setup
*/

const pageWrapper = shallow(<PHome />);

/**
	This is where the Mocha describe blocks begin.
	Each describe block may have other describe blocks inside.
	The single tests are defined by the "it" blocks.
*/

describe('PHome', function(){
	
	it('should render the login link', function(){
		expect(pageWrapper.find('a[name="login"]').prop('href')).toBe('/login');
	});
	it('should render the register link', function(){
		expect(pageWrapper.find('a[name="register"]').prop('href')).toBe('/register');
	});

});
