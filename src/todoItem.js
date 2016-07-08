(function(exports) {
  var idCount = 0;
  function ToDoItem(taskName){
    this.taskName = taskName;
    this.complete = false;
    this.taskID = idCount++;
  }

  ToDoItem.prototype = {
    setTask: function(taskName){
      this.taskName = taskName;
    },
    viewTask: function(){
      return this.taskName;
    },
    completeTask: function(){
      this.complete = 'completed';
    }
  }
  exports.ToDoItem = ToDoItem;
})(this);
