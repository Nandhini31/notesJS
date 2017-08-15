function noteReturnsString(){
   var description = "note.text returns a string";
   var note = new Note("Remember Milk");
   assert.isTrue(note.text() === "Remember Milk", description);
}

noteReturnsString();
