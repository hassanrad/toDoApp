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

  it('displays new task on the page', function(){
    this.browser.fill('task', 'Run');
    this.browser.pressButton('Add Task');
    this.browser.assert.text('li', 'Run - not completed');
  });

  it('completes a selected task', function(){
    this.browser.fill('task', 'Run');
    this.browser.pressButton('Add Task');
    this.browser.check('Run');
    this.browser.assert.text('li', 'Run - completed');
  });
});
