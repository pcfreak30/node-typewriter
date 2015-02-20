[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Built with Grunt][grunt-image]][grunt-url]

> A library for simulating a typewriter style-text on node CLI


## Install

``` sh
$ npm install --save node-typewriter
```


## Usage

**Arguments**

* str - *String to print*
* speed - *How long typing animation should take*
* blink - *Should cursor blinking animation be used? Cursor will be blinking even AFTER the callback/promise is fulfilled. Use stopBlink method to manually stop blinking. Blinking will be disabled on next typewriter run*


Supports both promises and standard callback.

**Promise**

``` js
var typewriter = require('node-typewriter');

typewriter('Hello World!').then(function(){
    console.log('Typing finished');
});
```

**Standard callback**

``` js
var typewriter = require('node-typewriter');

typewriter('Hello World!',undefined,false,function(){
    console.log('Typing finished');
});```

**Disable blinking**

``` js
var typewriter = require('node-typewriter');

typewriter.stopBlinking();```
```
## License

GPL v2 © [Derrick Hammer](http://www.derrickhammer.com)


[npm-url]: https://npmjs.org/package/node-typewriter
[npm-image]: https://badge.fury.io/js/node-typewriter.svg
[daviddm-url]: https://david-dm.org/pcfreak30/node-typewriter.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/pcfreak30/node-typewriter
