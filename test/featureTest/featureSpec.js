var http = require("http-server")
var Browser = require('zombie');
var assert = require('assert');
var expect = require('chai').expect;

describe('Webpage', function() {

  before(function() {
    this.server = http.createServer().listen(8080);
    this.browser = new Browser({ site: 'http://localhost:8080' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('displays the correct title', function(done){
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('title'), 'To Do List');
    done();
  });

  it('displays the tasks on the page', function(){
    this.browser.assert.text('li', 'Eat Breakfast');
  });
});
