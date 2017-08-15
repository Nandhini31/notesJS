(function(exports){

  function Notelistview(notelist){
    this.notelist= notelist
  }

  Notelistview.prototype.renderList = function(){
    return ( "<ul><li><div>" + this.notelist.listofnotes.map(function(note){return note.content}).join("</div></li><li><div>")+ "</div></li></ul>");
  }

  exports.Notelistview = Notelistview;

})(this);
