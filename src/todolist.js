var Mustache = require("mustache")

function ToDoList(){
  this.itemList = [];
}

ToDoList.prototype = {
  addItem: function(item){
    this.itemList.push(item);
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
    var template = '<ul>{{#tasks}}<li>{{.}}</li>{{/tasks}}</ul>';
    var html = Mustache.to_html(template, view);
    return html;
  }
};


module.exports = ToDoList;
