window.onload = function() {
  list = new ToDoList(ToDoItem, Mustache);
}

function stopDefAction(evt) {
      list.addItem(evt.path[0][0].value);
      document.getElementById('list').innerHTML = list.render();
      evt.preventDefault();
}

document.getElementById('addTask').addEventListener( 'submit', stopDefAction);
