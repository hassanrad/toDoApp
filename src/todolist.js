// var Mustache = require("mustache")
// var ToDoItem = require("../src/todoitem");


function ToDoList(){
  this.itemList = [];
}

ToDoList.prototype = {
  addItem: function(item){
    var task = new ToDoItem(item);
    this.itemList.push(task);
  },
  showNames: function(){
    var list = this.itemList.map(function(item){
      return item.task;
    })
    return list
  },
  render: function(){
    var view = {
      tasks: this.showNames()
    }
    var template = '{{#tasks}}<li>{{.}}</li>{{/tasks}}';
    var html = Mustache.to_html(template, view);
    return html;
  }
};


// module.exports = ToDoList;
