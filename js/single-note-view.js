(function(exports){

  function Noteview(note){
    this.note = note;
  }

  Noteview.prototype.renderNote = function(){
    return ( "<ul><li><div>" + this.note.text() + "</div></li></ul>");
  };

  exports.Noteview = Noteview;

})(this);
