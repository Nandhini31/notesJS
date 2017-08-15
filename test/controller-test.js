(function testingController(){
  var description = "render the list in index.html";

  var list = new List();
  var control = new Controller(list);

  control.render = function(){
    return this.view.renderList();
  };

  assert.isTrue(control.render = "<ul><li><div>Confusing challenge!</div></li></ul>", description);
})();
