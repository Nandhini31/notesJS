(function(exports){
  function List(){
    this.listofnotes = [];
  };

  List.prototype.list = function(){
    return this.listofnotes;
    console.log(this.listofnotes);
  };

  List.prototype.makeNote = function(text){
    note = new Note(text);
    this.listofnotes.push(note);
  };

exports.List = List;
})(this);
