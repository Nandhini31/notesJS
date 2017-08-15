(function(exports){
  function Controller(List){
    List.makeNote("Making a note");
    this.view = new Notelistview(List);
  }

  Controller.prototype.render = function(){
    document.getElementById("app").innerHTML = this.view.renderList() ;
  };

  exports.Controller = Controller;
})(this);

list = new List();
controller = new Controller(list);
try { controller.render(); } catch(err) {}
