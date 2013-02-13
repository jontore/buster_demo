(function() {
  var Input = function() {
    this.inputs = [];
    this._init();
    this.calculator = new Calculator();
  };

  Input.prototype.calculate = function(a, b) {
    this.value = this.calculator.add(a, b);
  };

  Input.prototype._init = function() {
    var container = document.createElement('div');
    this.inputs[0] = document.createElement('input');
    this.inputs[1] = document.createElement('input');

    this.inputs.forEach(function(input) {
      container.appendChild(input);
    });

    var button = document.createElement('button');
    container.appendChild(button);
    var that = this;
    button.onclick = function() {
      that.calculate(that.inputs[0].value, that.inputs[1].value);
    };

    document.body.appendChild(container);
  };

  window.Input = Input;
}());