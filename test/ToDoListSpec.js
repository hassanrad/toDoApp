var expect = require("chai").expect;
var ToDoList = require("../src/todolist");

describe('To Do List', function() {

  it('initializes with an empty array of to do items', function(){
    var toDoList = new ToDoList();
    expect(toDoList.itemList).to.be.empty;
  });

  it('stores a new task')

});
