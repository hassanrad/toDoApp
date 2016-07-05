var ToDoList = require('src/toDoList');
var Task = require('src/Task');

var todolist = new ToDoList();

todolist.addTask('eat breakfast');
todolist.addTask('take a shower');

var taskList = todolist.displayTasks();
console.log(todolist.displayTasks());
document.getElementById('tasklist').innerHTML = taskList;
