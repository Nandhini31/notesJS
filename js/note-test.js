function noteReturnsString(){
   var note = new Note("Remember Milk");
   assert.isTrue(note.text() === "Remember Milk");
};

noteReturnsString();
