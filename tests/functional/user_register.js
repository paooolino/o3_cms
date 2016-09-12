import expect from 'expect';
import Browser from 'zombie';

const browser = new Browser();

describe('[user register]', function() {
	
	// before: setup a user in the users table
	
	describe('user visits the app page', () => {
		it('should see the login form');
	});

	describe('user clicks on the "register" button', () => {
		it('should see the register form');
	});

	describe('register form field checks', () => {
		it('should not accept invalid emails as username');
		it('should not accept short passwords (<6) as password');
		it('should not accept passwords with no numbers');
		it('should not accept passwords with no capitalized letters');
		it('should not accept passwords with no punctuations');
	});
	
	describe('user submits register form with an existent username', () => {
		it('should see an error popup with a specific message and a link to lostpassword page');
	});	
	
	describe('user submits register form with a non existent username', () => {
		it('should see the registration confirm page');
	});

	//
	
});
