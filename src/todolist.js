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
      var nameList = this.itemList.map(function(item){
        return item.task;
      })
      return nameList
    },
    showStatus: function(){
      var statusList = this.itemList.map(function(item){
        return item.complete;
      });
      return statusList
    },
    changeStatus: function(name){
      function findTask(item){
        return item.task === name;
      }
      this.itemList.find(findTask).complete='completed';
    },
    render: function(){
      var view = {
        tasks: this.itemList,
        name: function() {
          return this.task
        },
        status: function() {
          return this.complete
        }
      }
      var template = '{{#tasks}}<li>{{name}} - {{status}}</li>{{/tasks}}';
      var html = this.Mustache.to_html(template, view);
      console.log(html)
      return html
      }
  }
  exports.ToDoList = ToDoList;
})(this);
