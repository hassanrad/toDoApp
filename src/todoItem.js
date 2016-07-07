(function(exports) {
  function ToDoItem(task){
    this.task = task;
    this.complete = 'not completed';
  }

  ToDoItem.prototype = {
    setTask: function(task){
      this.task = task
    },
    viewTask: function(){
      return this.task
    },
    completeTask: function(){
      this.complete = 'completed';
    }
  }
  exports.ToDoItem = ToDoItem;
})(this);
