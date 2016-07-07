var expect = require("chai").expect;
var Mustache = require("mustache")
var ToDoList = require("../src/todolist").ToDoList;
var ToDoItem = require("../src/todoitem").ToDoItem;

describe('To Do List', function() {

  beforeEach(function(){
    toDoList = new ToDoList(ToDoItem, Mustache);
  });

  describe('#itemList', function(){
    it('initializes with an empty array of to do items', function(){
      expect(toDoList.itemList).to.be.empty;
    });
  });

  describe('#addItem', function(){
    it('stores a new task', function(){
      toDoList.addItem('Eat Breakfast');
      expect(toDoList.itemList[0].task).to.equal('Eat Breakfast')
    });
  });

  describe('#showNames', function(){
    it('shows the names', function(){
      toDoList.addItem('Eat Breakfast')
      toDoList.addItem('Run')
      expect(toDoList.showNames()).to.eql(['Eat Breakfast', 'Run'])
    });
  });

  describe('#render', function(){
    it('renders a list in html', function(){
      toDoList.addItem('Eat Breakfast')
      toDoList.addItem('Run')
      expect(toDoList.render()).to.equal("<li>Eat Breakfast</li><li>Run</li>")
    });
  });
});
