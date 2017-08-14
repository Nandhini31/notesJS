(function(exports){
  function List(){
    this.listofnotes = [];
  };

  List.prototype.list = function(){
    return this.listofnotes;
  };

exports.List = List;
})(this);
