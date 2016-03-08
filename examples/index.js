/**
 * Created by alykoshin on 08.03.16.
 */

'use strict';

var logger = require('mini-rest-logger')();
var uncaught = require('../')({}, logger);

throw new Error('this is uncaught exception');
//  throw 'this is uncaught exception';
