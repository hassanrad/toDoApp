function ToDoList(){
  this.itemList = [];
}

ToDoList.prototype = {
  addItem: function(item){
    this.itemList.push(item);
  },
  showNames: function(){
    var list = this.itemList.map(function(item){
      return item.task;
    })
    return list
  }
};

module.exports = ToDoList;
