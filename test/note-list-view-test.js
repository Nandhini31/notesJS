(function returnsNoteListView(){
   var description = "notelistview returns first 20 characaters of a note";
   var notelist = new List();
   notelist.makeNote("This is a note that should be longer than 20 characters so that I can see if the first 20 character appear");
   var notelistview = new Notelistview(notelist);
   assert.isTrue(notelistview.renderList() === "<ul><li><div>This is a note that</div></li></ul>", description);
})();
