(function returnsNoteListView(){
   var description = "notelistview returns a view";
   var notelist = new List();
   notelist.makeNote("testing views");
   var notelistview = new Notelistview(notelist);
   assert.isTrue(notelistview.renderList() === "<ul><li><div>testing views</div></li></ul>", description);
})();
