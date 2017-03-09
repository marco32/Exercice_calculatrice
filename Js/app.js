console.log("Test");

function addition (a, b){
	return a + b;
}
console.log(addition(3, 16));

function soustraction(a, b) {
	return a - b;
}
console.log(soustraction(5, 2));

function multiplication(a, b) {
	return a * b;
}
console.log(multiplication(14, 5));


function division(a, b) {
	if ( b > 0) 
		return a / b;
	
	else
		return "Can't divide by 0"
}

console.log(division(12, 0));