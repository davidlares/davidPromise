function alwaysThrows(){
	return new Error('OH NOES')	
}

function iterate(arg){
	console.log(arg)
	return arg + 1
}

var chain = Promise.resolve().then(function(fulfill, reject){

	var items = [1,2,3,4,5,6].forEach(function(elem){
		
		if(elem > 5) {
			console.log(alwaysThrows().message);
		} else {
			iterate(elem);
		}

	});
	
}).catch(onReject);

function onReject(error){
	console.log(error.message)
}