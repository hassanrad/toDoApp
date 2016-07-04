'use strict';

function ToDo() {
  this.tasks = [];
};

ToDo.prototype = {
  tasks: function() {
    return this.tasks;
  }
};

module.exports = ToDo;
