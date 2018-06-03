var qio = require('q-io/http');

var test = qio.read('http://localhost:1337')
	.then(function(data){
		return JSON.parse(data);
	})

test.then(console.log)