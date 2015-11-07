var $ = require('../lib/jquery-2.1.4');

var consoleLogger = function() {
  var init = function() {
    console.log('jQuery has been imported: ' + $);
  };

  return {
    init: init,
  };
}();

module.exports = consoleLogger;
