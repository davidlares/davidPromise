var qio = require('q-io/http');

qio.read("http://localhost:7000").then(function(ff){
	return qio.read("http://localhost:7001/" + ff)
}).then(function(json){
	 return JSON.parse(json);
}).then(function(data){
	console.log(data);
})