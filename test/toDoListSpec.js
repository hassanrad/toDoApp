'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDoList = require('../src/toDoList');
var Task = require('../src/Task');

describe('to do list', function(){
  var todolist = new ToDoList();
  var task = new Task('eat breakfast');

    it('should display HTML list of contained tasks', function(){
      todolist.addTask('eat breakfast');
      expect(todolist.displayTasks()).to.include('<ul><li><div>eat breakfast: false</div></li></ul>');
    });

  it('should create a new instance of itself', function(){
    expect(todolist).to.be.an.instanceof(ToDoList);
  });

  it('should start with an empty to-do list', function(){
    expect(todolist.tasks).to.be.empty;
  });

  it('should store a task', function(){
    todolist.addTask('eat breakfast');
    expect(todolist.returnTasks()).to.include({name: 'eat breakfast', isComplete: false });
  });

  it('should define tasks are incomplete by default', function() {
    todolist.addTask('eat breakfast');
    expect(todolist.returnTasks()).to.include({name: 'eat breakfast', isComplete: false });
  });

  it('should store multiple tasks', function(){
    todolist.addTask('eat breakfast');
    todolist.addTask('take a shower');
    expect(todolist.returnTasks()).to.include({name: 'eat breakfast', isComplete: false});
    expect(todolist.returnTasks()).to.include({name: 'take a shower', isComplete: false});
  });


  // it('should ')
});
