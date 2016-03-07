'use strict';

var AppError = require('mini-rest-errors').AppError;


var UncaughtHandler = function(options, logger) {

  var handleUncaught = true;
  if (handleUncaught) {
    process.on('uncaughtException', function (err) {
      var message = (typeof err === 'string') ? err : err.message;

      var throwFatalInDev = true;
      // In Node SyntaxError must be thrown in order to show the real filename, linenumber, colnumber
      // as they are not part of SyntaxError object
      if (throwFatalInDev && process.env.NODE_ENV === 'development' && err instanceof SyntaxError) {
        throw err;
      }
      // Same for error `Directory does not exists.*` from `config-dir-all` module
      // TODO: replace `throw <string>` with `throw new Error()`
      //
      if (throwFatalInDev && process.env.NODE_ENV === 'development' && err && /Directory does not exists.*/.test(message)) {
        throw err;
      }

      logger.error('uncaughtException:', err, err.stack);
      var error = new AppError('unknownError', typeof err === 'string' ? { message: err } : err);
    });
  }

};

module.exports = function(options, logger) { return new UncaughtHandler(options, logger); };
