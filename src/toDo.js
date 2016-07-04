'use strict';

function ToDo() {
  this.tasks = [];
};

ToDo.prototype = {
  tasks: function() {
    return this.tasks;
  },

  addTask: function(task) {
    this.tasks.push({'task': task, 'complete': false});
  }
};

module.exports = ToDo;
