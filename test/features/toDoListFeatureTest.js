const Browser = require('zombie');

Browser.localhost('example.com', 8080);

describe('ToDoList Feature Testing', function(){

  const browser = new Browser();

  before(function(done){
    browser.visit('/', done);
  });

  it('should have a title of "To Do List"', function(){
    browser.assert.text('#title', 'To Do List');
  });

  it('should have a list of tasks', function(){
    browser.assert.text('#task-list', 'eat breakfast');
  });

});
