(function(exports){
  function ToDoList(ToDoItem, Mustache){
    this.itemList = [];
    this.ToDoItem = ToDoItem;
    this.Mustache = Mustache;
  }

  ToDoList.prototype = {
    addItem: function(item){
      this.itemList.push(new this.ToDoItem(item));
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
      var html = this.Mustache.to_html(template, view);
      return html;
    }
  }
  exports.ToDoList = ToDoList;
})(this);
