import expect from 'expect';
import browser from 'zombie';

const browser = new Browser();

describe('[user login]', function() {
 	
	// before: setup a user in the users table
	
	describe('user visits the app page', () => {
		it('should see the login form');
	});
	
	describe('login form field checks', () => {
		it('should not accept invalid emails as username');
		it('should not accept short passwords (<6) as password');
	});
	
	describe('user submits login form with wrong credentials', () => {
		it('should see an error popup with a link to lostpassword page');
	});

	describe('user submits login form with correct credentials', () => {
		it('should see the main dashboard page');
	});
 
	//
	
});
