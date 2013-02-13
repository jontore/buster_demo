(function() {
  var Calculator = function() {
    var add = function(a, b) {
      return a + b;
    };

    return {
      add: add,
    };
  };

  window.Calculator = Calculator;

})();