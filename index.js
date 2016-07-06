window.onload = function() {
list = new ToDoList(ToDoItem, Mustache);
list.addItem('Eat Breakfast');

var output = list.render();
console.log(output);

document.getElementById('list').innerHTML = output;
}
