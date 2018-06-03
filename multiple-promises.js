function all(prom1,prom2){
	
	return new Promise(function(fulfill,reject){

		// contador
		let counter = 0;
		var arr = []; // arreglo para guardar los elementos

		prom1.then(function(value,err){ // declaracion de promesas
			arr[0] = value;
			counter++;

			if(counter >=2){
				fulfill(arr)
			};
		})

		prom2.then(function(value,err){ // declaracion de promesas
			arr[1] = value;
			counter++;

			if(counter >=2){
				fulfill(arr)
			};
		})
	})
}

all(getPromise1(),getPromise2()).then(console.log)

// metodo all que admite dos promesas