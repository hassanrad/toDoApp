var expect = require("chai").expect;
var ToDoList = require("../src/todolist");
var ToDoItem = require("../src/todoitem");

describe('To Do List', function() {

  beforeEach(function(){
    toDoList = new ToDoList();
  });

  describe('#itemList', function(){
    it('initializes with an empty array of to do items', function(){
      expect(toDoList.itemList).to.be.empty;
    });
  });

  describe('#addItem', function(){
    it('stores a new task', function(){
      var item = new ToDoItem('Eat Breakfast');
      toDoList.addItem(item)
      expect(toDoList.itemList[0].task).to.equal('Eat Breakfast')
    });
  });
});
