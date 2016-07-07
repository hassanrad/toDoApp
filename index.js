toDoList = new ToDoList(ToDoItem, Mustache);
toDoList.addItem('Eat breakfast');

var output = toDoList.render();

document.getElementById('list').innerHTML = output;
