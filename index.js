// The receivesAFunction function takes a callback function as an argument and calls it.
function receivesAFunction(callback) {
    callback();
  }
  
  // The returnsANamedFunction function returns a named function.
  function returnsANamedFunction() {
    function namedFunction() {
      console.log('This is a named function.');
    }
    return namedFunction;
  }
  
  // The returnsAnAnonymousFunction function returns an anonymous function.
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('This is an anonymous function.');
    };
  }
  

  