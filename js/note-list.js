(function(exports){

  function List(){
    this.listofnotes = [];
    this.idincrementor = 0;
  }

  List.prototype.list = function(){
    return this.listofnotes;
  };

  List.prototype.makeNote = function(text){
    this.idincrementor += 1;
    note = new Note(text, this.idincrementor);
    this.listofnotes.push(note);
  };

  exports.List = List;

})(this);
