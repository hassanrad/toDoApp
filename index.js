window.onload = function() {
list = new ToDoList();
list.addItem('Run');
list.addItem('Go Shopping');

var output = list.render();
console.log(output);

document.getElementById('list').innerHTML = output;
}
