function listReturnsArray(){
   var list = new List();
   assert.isTrue(Object.prototype.toString.call(list.list()) === '[object Array]');
};

listReturnsArray();
