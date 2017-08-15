(function returnsNoteView(){
   var description = "renderNote returns html of the note view";
   var note = new Note("this is some text");
   var noteview = new Noteview(note);
   assert.isTrue(noteview.renderNote() === "<ul><li><div>this is some text</div></li></ul>", description);
})();
