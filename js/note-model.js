(function(exports){

  function Note(content, id){
    this.content = content;
    this.idnumber = id;
  }

  Note.prototype.text = function(){
    return this.content;
  };

  Note.prototype.id = function(){
    return this.idnumber;
  };

exports.Note = Note;

})(this);
