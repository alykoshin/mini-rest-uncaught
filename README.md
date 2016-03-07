[![npm version](https://badge.fury.io/js/mini-rest-uncaught.svg)](http://badge.fury.io/js/mini-rest-uncaught)
[![Build Status](https://travis-ci.org/alykoshin/mini-rest-uncaught.svg)](https://travis-ci.org/alykoshin/mini-rest-uncaught)
[![Coverage Status](https://coveralls.io/repos/alykoshin/mini-rest-uncaught/badge.svg?branch=master&service=github)](https://coveralls.io/github/alykoshin/mini-rest-uncaught?branch=master)
[![Code Climate](https://codeclimate.com/github/alykoshin/mini-rest-uncaught/badges/gpa.svg)](https://codeclimate.com/github/alykoshin/mini-rest-uncaught)
[![Inch CI](https://inch-ci.org/github/alykoshin/mini-rest-uncaught.svg?branch=master)](https://inch-ci.org/github/alykoshin/mini-rest-uncaught)

[![Dependency Status](https://david-dm.org/alykoshin/mini-rest-uncaught/status.svg)](https://david-dm.org/alykoshin/mini-rest-uncaught#info=dependencies)
[![devDependency Status](https://david-dm.org/alykoshin/mini-rest-uncaught/dev-status.svg)](https://david-dm.org/alykoshin/mini-rest-uncaught#info=devDependencies)


# mini-rest-uncaught

Simple uncaught exception handler for mini-rest project


If you have different needs regarding the functionality, please add a [feature request](https://github.com/alykoshin/mini-rest-uncaught/issues).


## Installation

```sh
npm install --save mini-rest-uncaught
```

## Usage

```js
var logger = require('mini-rest-logger')();
var uncaught = require('../')({}, logger);

throw new Error('this is uncaught exception');
```

```sh
$ node examples/index.js 
2016-03-07T23:30:58.211Z - error: [index] uncaughtException: [Error: this is uncaught exception] Error: this is uncaught exception
    at Object.<anonymous> (/home/alykoshin/sync/al-projects/dev/npm/mini-rest-uncaught/examples/index.js:10:7)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)
    at startup (node.js:139:18)
    at node.js:999:3
```


## Credits
[Alexander](https://github.com/alykoshin/)


# Links to package pages:

[github.com](https://github.com/alykoshin/mini-rest-uncaught) &nbsp; [npmjs.com](https://www.npmjs.com/package/mini-rest-uncaught) &nbsp; [travis-ci.org](https://travis-ci.org/alykoshin/mini-rest-uncaught) &nbsp; [coveralls.io](https://coveralls.io/github/alykoshin/mini-rest-uncaught) &nbsp; [inch-ci.org](https://inch-ci.org/github/alykoshin/mini-rest-uncaught)


## License

MIT
