function ToDoItem(task){
  this.task = task;
  this.complete = false;
}

ToDoItem.prototype.setTask = function(task){
  this.task = task
}

ToDoItem.prototype.viewTask = function(){
  return this.task
}

ToDoItem.prototype.completeTask = function(){
  this.complete = true
}

module.exports = ToDoItem
