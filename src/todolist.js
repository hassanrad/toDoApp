(function(exports){
  function ToDoList(ToDoItem, Mustache){
    this.pendingItemList = [];
    this.completedItemList = [];
    this.ToDoItem = ToDoItem;
    this.Mustache = Mustache;
  }

  ToDoList.prototype = {
    addItem: function(item){
      this.pendingItemList.push(new this.ToDoItem(item));
    },
    // showNames: function(){
    //   var nameList = this.itemList.map(function(item){
    //     return item.task;
    //   })
    //   return nameList
    // },
    // showStatus: function(){
    //   var statusList = this.itemList.map(function(item){
    //     return item.complete;
    //   });
    //   return statusList
    // },
    changeStatus: function(taskID){
      function findTask(item){
        return item.taskID === taskID;
      }
      this.pendingItemList.find(findTask).complete = true;
      this.completedItemList.push(this.pendingItemList.find(findTask));
      //below code removes "named" task object from the pendingItemList
      for (var i =0; i < this.pendingItemList.length; i++)
        if (this.pendingItemList[i].taskID === taskID) {
          this.pendingItemList.splice(i,1);
          break;
        }
    },
    pendingRender: function(){
      var pendingView = {
        tasks: this.pendingItemList,
        name: function() {
          return this.taskName;
        },
        id: function() {
          return this.taskID;
        }
      };
      var pendingTemplate = '{{#tasks}}<li><input type ="checkbox" id="check" onclick="changeStatus({{id}})>{{name}}</li>{{/tasks}}';
      var pendingHtml = this.Mustache.to_html(pendingTemplate, pendingView);
      return pendingHtml;
    },
    completeRender: function(){
      var completeView = {
        tasks: this.completeItemList,
        name: function() {
          return this.taskName;
        }
      };
      var completeTemplate = '{{#tasks}}<li>{{name}}</li>{{/tasks}}';
      var completeHtml = this.Mustache.to_html(completeTemplate, completeView);
      return completeHtml;
    }
  };
  exports.ToDoList = ToDoList;
})(this);
