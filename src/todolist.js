function ToDoList(){
  this.itemList = [];
}

ToDoList.prototype = {
  addItem: function(item){
    this.itemList.push(item);
  }
};

module.exports = ToDoList;
