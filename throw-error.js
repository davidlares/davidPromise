'use strict'

function parsePromised() {
	
	return new Promise(function(fulfill,reject){
		try {
			fulfill(JSON.parse(process.argv[2]));
		} catch(e) {
			reject(e);
		}
	});
}

function onReject(error){
	console.log(error.message);
}

parsePromised().then(null,onReject);