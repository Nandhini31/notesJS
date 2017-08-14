function listReturnsArray(){
   var list = new List();
   assert.isTrue(Object.prototype.toString.call(list.list()) === '[object Array]');
};

listReturnsArray();


function listCreatesNotes(){
  var list = new List();
  text = 'Hello world';
  list.makeNote(text);
  assert.isTrue(list.list().pop().text() === text);
};

listCreatesNotes();

function listReturnsAllNotes(){
  var list = new List();
  randomNumber = Math.floor(Math.random()*10+1) + 5
  for (i = 0; i < randomNumber; i++) {
    list.makeNote(String(i));
  };
  console.log("Rnadom number:" + String(randomNumber));
  assert.isTrue(list.list().length === randomNumber);
};

listReturnsAllNotes();
