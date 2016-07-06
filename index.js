window.onload = function() {
  list = new ToDoList(ToDoItem, Mustache);
}

document.getElementById('addTask').onclick = function addTask() {
      console.log('event!')
      list.addItem(document.getElementById('hello').value);
      document.getElementById('list').innerHTML = list.render();
}
