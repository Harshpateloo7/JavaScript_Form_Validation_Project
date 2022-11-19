/* SUPPLEMENTAL 8:  FORM HANDLING */
//#1 ========
window.onload = goPage;
function goPage(){
var msgOut = document.getElementById("confirmMsg");
//#2 ========
var formHandle = document.forms.f_quote;
formHandle.onsubmit = checkForm;
// console.log(formHandle)

function checkForm(){
	//When the form gets submitted
	
	// alert("Test")

	// Get form elemnts
	var nameIn = document.getElementById("id_name");
	var phoneIn = formHandle.f_phone;
	var hoursIn = formHandle.f_daytime;

	//====Validation====
	// Name
	if(nameIn.value === ""){
		// alert("no text");
		nameIn.style.backgroundColor = "red";
		nameIn.focus();
		return false;
	} else{
		nameIn.style.backgroundColor = "white";
	}
	
	//Phone
	 var phoneRegex = /^\d{3}(\s|-)?\d{3}(\s|-)?\d{4}$/; 
	if(phoneRegex.test (phoneIn.value)){
		// alert("no text");
		phoneIn.style.backgroundColor = "white";
	}else{
		phoneIn.style.backgroundColor = "red";
		phoneIn.focus();
		return false;
	}
	// Hourse chec to set Hours Message

	if(hoursIn.checked === true){
		timeMsg = "after";

	}else{
		timeMsg = "during";
	}

	// Get output elements
	var nameOut = document.getElementById("msg_name");
	var phoneOut = document.getElementById("msg_phone");
	var timeOut = document.getElementById("msg_time");

	//Output values from input to Web Page
	nameOut.innerHTML = nameIn.value;
	phoneOut.innerHTML = phoneIn.value;
	timeOut.innerHTML = timeMsg + " busniss hours";


	// hiding form and Show Output block
	formHandle.style.display = "none";  
	msgOut.style.display = "block";
	//Prevent from form submitting
	return false;
} //end onsubmit





}//end onload
