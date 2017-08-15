(function noteReturnsString(){
  var description = "note.text returns a string";
  var note = new Note("Remember Milk");
  assert.isTrue(note.text() === "Remember Milk", description);
})();

(function noteHasAnId(){
  var description = "note.id returns and id";
  var note = new Note("this is a note", 1);
  assert.isTrue(note.id() === 1, description);
})();
