var events = require("events");
var eventEmitter = new events.EventEmitter();

var myEventHandler1 = function(str) {
    console.log(str);
}
var myEventHandler2 = function(str) {
    console.log(str);
}
var myEventHandler3 = function(str) {
    console.log(str);
}

eventEmitter.on('scream', myEventHandler1);
eventEmitter.emit('scream', 'Scream');
eventEmitter.on('abc', myEventHandler2);
eventEmitter.emit('abc', 'abc');
// eventEmitter.on('Father', myEventHandler3);
// eventEmitter.emit('Father', 'father');