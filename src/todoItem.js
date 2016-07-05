function ToDoItem(task){
  this.task = task;
  this.complete = false;
}

ToDoItem.prototype = {
  setTask: function(task){
    this.task = task
  },
  viewTask: function(){
    return this.task
  },
  completeTask: function(){
    this.complete = true
  }
}

module.exports = ToDoItem
