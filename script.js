function validEmail(str) {
  //your JS code here.
	let original = str
	if(original == ""){
		return false;
	}
	if(original.includes("@")){
		return true;
	} 
	if(original[0] == "@"){
		return false
	}
	if(original.includes(".com")  || original.includes(".com.in") || original.includes(".in") ){
		return true
	} else{
		return false;
	}
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
