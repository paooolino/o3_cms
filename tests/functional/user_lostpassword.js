import expect from 'expect';
import browser from 'zombie';

const browser = new Browser();

describe('[user lostpassword]', function() {
 	
	// before: setup a user in the users table
	
	describe('user visits the app page', () => {
		it('should see the login form');
	});
	
	describe('user clicks on the "lostpassword" button', () => {
		it('should see the lostpassword form');
	});
	
	describe('login form field checks', () => {
		it('should not accept invalid emails as username');
	});
	
	describe('user submits login form with a non existent username', () => {
		it('should see an error message');
	});
	
	describe('user submits login form with an existent username', () => {
		it('should see the lostpassword confirm page');
	});
 
	//
	
});
