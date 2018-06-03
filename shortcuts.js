var promesa = new Promise(function(fulfill, reject){
	fulfill('I FIRED')
	reject(new Error('I DID NOT FIRE'))
});

promesa.then(console.log()).catch(console.error());

var error = Promise.reject('MARICO EL QUE LO LEA');