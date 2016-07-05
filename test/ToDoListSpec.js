var expect = require("chai").expect;
var ToDoList = require("../src/todolist");
var ToDoItem = require("../src/todoitem");

describe('To Do List', function() {

  beforeEach(function(){
    toDoList = new ToDoList();
    item1 = new ToDoItem('Eat Breakfast');
    item2 = new ToDoItem('Run');
  });

  describe('#itemList', function(){
    it('initializes with an empty array of to do items', function(){
      expect(toDoList.itemList).to.be.empty;
    });
  });

  describe('#addItem', function(){
    it('stores a new task', function(){
      toDoList.addItem(item1)
      expect(toDoList.itemList[0].task).to.equal('Eat Breakfast')
    });
  });

  describe('#showNames', function(){
    it('shows the names', function(){
      toDoList.addItem(item1)
      toDoList.addItem(item2)
      expect(toDoList.showNames()).to.eql(['Eat Breakfast', 'Run'])
    });
  });

  describe('render', function(){
    it('renders the page in html', function(){
      toDoList.addItem(item1)
      toDoList.addItem(item2)
      expect(toDoList.render()).to.equal("<ul><li>Eat Breakfast</li><li>Run</li></ul>")
    });
  });
});
