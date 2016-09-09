import expect from 'expect';
import browser from 'zombie';

const browser = new Browser();

describe('[user login]', function() {
 
	this.timeout(10000);
 
	before(function(done){
		browser.visit(config.test_host + config.test_path + ‘/test-api/clean’, function(){
			done();
		});
	});
 
})