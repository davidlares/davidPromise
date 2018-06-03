require('es6-promise')

var promise = new Promise(function(fulfill,reject){

	setTimeout(() => {
		 var err = new Error('REJECTED!')
		 reject(err);
	},300);

});

function onReject(err){
	console.log(err.message);
}

promise.then(null, onReject)