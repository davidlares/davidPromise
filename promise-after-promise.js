var chain = first().then(function(val){
	return second(val,null)
}).then(function(val){
	console.log(val);
})

// first and second -> global functions
// first return -> fulfilled data passed to the second function