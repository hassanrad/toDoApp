// var Task = require('./Task');

(function ToDoList() {
  this._tasks = [];
})();

ToDoList.prototype = {
  returnTasks: function() {
    return this._tasks;
  },
  addTask: function(name) {
    var task = new Task(name);
    this._tasks.push(task);
  },
  taskNames: function() {
    return this._tasks.map(function(item,index) {
      return item.name;
    });
  },
  displayTasks: function() {
    var view = {
      'taskNames': this.taskNames(),
      'taskStatus': 'false'
    };
    var template = '<ul><li><div>{{#taskNames}}{{.}}{{/taskNames}}: {{#taskStatus}}{{.}}{{/taskStatus}}</div></li></ul>';
    var output = Mustache.to_html(template, view);
    return output;
  }
};

module.exports = ToDoList;
