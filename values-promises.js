'use strict'

// mi solucion

function attachTitle(w){
	return 'DR. ' + w;
}

Promise.resolve('MANHATTAN').then(function(data){
	return attachTitle(data);
}).then(function(result){
	console.log(result);
})


// solucion oficial -> https://github.com/stevekane/promise-it-wont-hurt/issues/110 

var attachTitle = function(word){
	return 'DR. ' + word;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);