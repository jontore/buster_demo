function getTodos(listId, callback) {
    $.ajax({
        url: "/todo/" + listId + "/items",
        success: function (data) {
            // Node-style CPS: callback(err, data)
            callback(null, data);
        }
    });
}

buster.testCase("calculator", {
  'setUp': function() {
    this.input = new Input();
  },
  'this is inner scenario': {
    'setUp': function() {},
    "//it can have it's own setUp/tearDown": function() {
    },
    'tearDown': function() {}
  },
  'async testing': function(done) {
    setTimeout(function(){
      assert(true);
      done();
    }, 100);
  },
  'xhr mocking': {
    'setUp': function() {
      xhr = sinon.useFakeXMLHttpRequest();
      requests = [];
      xhr.onCreate = function (req) { requests.push(req); };
    },
    'i want to check that the right request is done': function() {
      getTodos(42, function(){});

      assert.equals(requests.length, 1);
      assert.match(requests[0].url, "/todo/42/items");
    },
    'on ok should call back': function() {
      var spy = this.spy();
      getTodos(42, spy);

      requests[0].respond(
        200,
        { "Content-Type": "application/json" },
        JSON.stringify([{text: "HERP DERP"}])
      );

      assert.calledOnce(spy);
    },
    'tearDown': function() {
      //!NB really important
      xhr.restore();
    },
  },
  'speeding up the clock ;)': {
    'setUp': function() {
      this.clock = sinon.useFakeTimers();
    },
    'on no so fast': function() {
      var value = 1;
      setTimeout(function() {
        value = 2;
      }, 100);
      this.clock.tick(110);
      assert.equals(value, 2);
    },
    'tearDown': function() {
      this.clock.restore();
    }
  }

});