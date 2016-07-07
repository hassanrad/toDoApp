var server = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');

describe('contact page', function() {
  server.listen(2000);
  browser = new Browser({ site: 'http://localhost:2000' });

  beforeEach(function(done) {
  browser.visit('/', done);
});

it('has an index page', function() {
  browser.assert.status(200);
});

// it('dispays a to-do list', function() {
//   browser.assert.text('#tasks', 'Eat Breakfast');
// // });

});
