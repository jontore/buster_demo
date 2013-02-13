buster.testCase("calculator", {
  'setUp': function() {
    this.calc = new Calculator();
  },
  'should be able to add two numbers': function() {
    var result = this.calc.add(1, 2);
    assert.equals(result, 3);
  }
});