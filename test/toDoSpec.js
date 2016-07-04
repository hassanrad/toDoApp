'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDo = require('../src/toDo');

describe('to do', function(){
  var todo = new ToDo();

  it('should create a new instance of itself', function(){
    expect(todo).to.be.an.instanceof(ToDo);
  });

  it('should start with an empty to-do list', function(){
    expect(todo.tasks).to.be.empty;
  });
  it('should store a task', function(){
    var task = "eat breakfast";
    expect(todo.task)
  });
});
