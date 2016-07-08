toDoList = new ToDoList(ToDoItem, Mustache);

document.getElementById('addTask').onclick = function addTask(){
  toDoList.addItem(document.getElementById('task').value);
  var pendingOutput = toDoList.pendingRender();
  document.getElementById('pendingList').innerHTML = pendingOutput;
};
// The code below is not functional yet, it's for the checkbox
document.getElementById('addTask').onclick = function changeStatus(task){
  toDoList.changeStatus(task);
  var pendingOutput = toDoList.pendingRender();
  document.getElementById('pendingList').innerHTML = pendingOutput;
  var completeOutput = toDoList.completeRender();
  document.getElementById('completeList').innerHTML = completeOutput;
};
