var myHooks = function () {
  this.Before(function (scenario) {

    // Just like inside step definitions, "this" is set to a World instance.
    // It's actually the same instance the current scenario step definitions
    // will receive.

  });

  this.After(function (scenario) {
    // Just like inside step definitions, "this" is set to a World instance.
    // It's actually the same instance the current scenario step definitions
    // will receive.

  });
};

module.exports = myHooks;
