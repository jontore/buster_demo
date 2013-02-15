buster.testCase("calculator", {
  'setUp': function() {
    this.input = new Input();
  },
  'should have two input field': function() {
    var inputs = document.getElementsByTagName("input");
    assert.equals(inputs.length, 2);
  },
  'should have a button': function() {
    var button = document.getElementsByTagName("button");
    assert.equals(button.length, 1);
  },
  'on click the button should calculate the result': function() {
    var button = document.getElementsByTagName("button");
    var inputs = document.getElementsByTagName("input");
    inputs[0].value = 1;
    inputs[1].value = 2;
    button[0].click();

    assert.equals(this.input.value, 3);
  },
  'result should be displayed': function() {
    var button = document.getElementsByTagName("button");
    var inputs = document.getElementsByTagName("input");
    inputs[0].value = 1;
    inputs[1].value = 2;
    button[0].click();

    var result = document.getElementById("result");

    assert.equals(result.innerHTML, 3);
  }
});