var app = require('../../server');
var http = require("http-server")
var Browser = require('zombie');

describe('Webpage', function() {

  before(function() {
    this.server = http.createServer().listen(8080);
  });

  it('should show the correct title', function(){

  });
});
