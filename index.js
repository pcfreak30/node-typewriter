'use strict';
var Q = require('q');
var EventEmitter = require('events').EventEmitter;
function TypeWriter(str,speed,blink,callback) {
    TypeWriter.event = new EventEmitter;
    TypeWriter.stopBlink = function () {
        TypeWriter.event.emit('hide');
        TypeWriter.event.removeAllListeners();
        TypeWriter._blinking = false;
    };
    TypeWriter.startBlink = function () {
        TypeWriter._blinking = true;
        TypeWriter.event.on('show',function () {
            process.stdout.write('\x1b[?25l');
            setTimeout(function () {
                TypeWriter.event.emit('hide');
            },500);
        });
        TypeWriter.event.on('hide',function () {
            process.stdout.write('\x1b[?25h');
            setTimeout(function () {
                TypeWriter.event.emit('show');
            },500);
        });
        TypeWriter.event.emit('show');
    };
    TypeWriter._blinking = false;
    speed = speed || 5000;
    blink = blink || false;
    if (TypeWriter._blinking) {
        this.end();
    }
    return Q.Promise(function (resolve) {
        str.split('').map(function (v) {
            return function () {
                return Q(process.stdout.write(v)).delay(Math.floor(speed / str.length));
            };
        }).reduce(Q.when,null).then(function () {
            if (blink) {
                TypeWriter.startBlink();
            }
            if (callback) {
                callback();
            }
            else {
                resolve();
            }
        });
    });
}
module.exports = TypeWriter;
