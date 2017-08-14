function noteReturnsString(){
   var note = new Note("Remember Milk");
   assert.isTrue(note.content==="Remember Milk");
};

noteReturnsString();
