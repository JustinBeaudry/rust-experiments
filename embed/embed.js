var ffi = require('ffi');

var lib = ffi.Library('target/release/libembed.dylib', {
	process: ['void', []]
});

console.time('count');
lib.process();

console.timeEnd('count');
console.info('done!');