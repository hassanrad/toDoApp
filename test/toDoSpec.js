'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('to do', function(){
  var toDo =function(){};
  var todo = new toDo();

  it('should create a new instance of itself', function(){
    expect(todo).to.be.an.instanceof(toDo);
  })
});
