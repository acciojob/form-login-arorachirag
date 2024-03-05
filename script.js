function getFormvalue() {
    //Write your code here
	let inputs = document.querySelectorAll("input");

	let firstName = inputs[0];
	let lastName = inputs[1];

	let fullName = firstName +" "+lastName;
	alert(fullName)
}
