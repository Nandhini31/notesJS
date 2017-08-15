var assert = {
  isTrue: function(assertionToCheck, description){
    if(!assertionToCheck){
        throw new Error("Assertion failed: " + assertionToCheck + "is not truthy");
    }
    else{
      console.log('Assertion passed: "' + description + '"');
    }
  }
};
