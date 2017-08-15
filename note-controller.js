(function(exports){

  function Controller(List){
    List.makeNote("Confusing challenge!")
    this.view = new Notelistview(List)
  }

  Controller.prototype.render = function(){

    document.getElementById("app").innerHTML = this.view.renderList() ;
  
  }

  exports.Controller = Controller;

})(this);
