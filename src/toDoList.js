'use strict';

var Mustache = require('mustache');
var Task = require('./Task');

function ToDoList() {
  this._tasks = [];
};

ToDoList.prototype = {
  returnTasks: function() {
    return this._tasks;
  },

  addTask: function(name) {
    var task = new Task(name);
    this._tasks.push(task);
  },

  displayTasks: function() {
    var view = {
      task: function() {
        for(var i=0; i<this._tasks.length; i++) {
          return this._tasks[i];
        }
      }
    };
    var template = '<ul><li><div>{{task}}</div></li></ul>';
    var output = Mustache.render(template, view);
    console.log(task);
    return output;
  }
};

module.exports = ToDoList;
