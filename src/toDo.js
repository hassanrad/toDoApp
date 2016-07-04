'use strict';

var mustache = require('mustache');

function ToDo() {
  this.tasks = [];
};

ToDo.prototype = {
  tasks: function() {
    return this.tasks;
  },

  addTask: function(task) {
    this.tasks.push({'task': task, 'complete': false});
  },

  displayTasks: function() {
    // var view = {
    //   task: function() {
    //     for(var i=0; i<this.tasks.length; i++) {
    //       return this.tasks[i]['task'];
    //     }
    //   }
    // };
    // var template = '<ul><li><div>{{task}}</div></li></ul>';
    // var html = Mustache.to_html(template, view);
    // return html;
  }
};

module.exports = ToDo;
