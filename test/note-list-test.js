(function listReturnsArray(){
  var description = ".list returns the array of notes";
  var list = new List();
  assert.isTrue(Object.prototype.toString.call(list.list()) === '[object Array]', description);
})();

(function listCreatesNotes(){
  var description = ".makeNote creates a note";
  var list = new List();
  text = 'Hello world';
  list.makeNote(text);
  assert.isTrue(list.list().pop().text() === text, description);
})();

(function listReturnsAllNotes(){
  var description = "the list return contains all the notes";
  var list = new List();
  list.makeNote("hello");
  list.makeNote("testing");
  assert.isTrue(list.list().length === 2, description);
})();

(function listIncrementsNoteID(){
  var description = "makenote automatically increments the note id";
  list.makeNote("hello");
  list.makeNote("testing");
  list.makeNote("testing");
  assert.isTrue(list.list()[2].id() === 3, description);
})();
