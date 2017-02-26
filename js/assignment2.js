function validation() //Function for data validation on submit.
	{
		var validPostalcode = /^[A-Z|a-z][0-9][A-Z|a-z]\s[0-9][A-Z|a-z][0-9]$/;
		var validPhone = /^\(?(\d{3})\)?[\.\-\/\s]?(\d{3})[\.\-\/\s]?(\d{4})$/;
		var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var errors = new Array(); //Array for the error messages.
		var errorFlag = 0;		
		
		if (document.gmail.firstname.value == "" || null) 
			{
				errorFlag = 1; //errorflag is set to 1, triggering the error display.
				errors.push("Must enter a valid first name"); //Push the error message into the array.
			}
		if (document.gmail.lastname.value == "" || null) 
			{
				errorFlag = 1;
				errors.push("Must enter a valid last name");
			}
		if (!validPhone.test(document.gmail.phonenumber.value)) //If phonenumber does not match the expression validPhone. Give error.
			{
				errorFlag = 1;
				errors.push("Must enter a valid phone number");
			}
		if (!validEmail.test(document.gmail.currentemail.value)) 
			{
				errorflag = 1;
				errors.push("Must enter a valid email address");
			}
		if (document.gmail.city.value.length < 3) //If city entry is less then 3 characters. Give an error.
			{
				errorFlag = 1;
				errors.push("City must be more than 3 characters");
			}
		if (!validPostalcode.test(document.gmail.pcode.value)) 
			{
				errorFlag = 1;
				errors.push("Must enter a valid postal code");
			}
		if (errorFlag == 1) //If errorflag is triggered, enter if statement.
			{
				document.getElementById("errors").innerHTML = errors.join("<br>"); //Display all errors.
				return false; //return false so that the form does not submit if errors are present.
			}
	}
	
function pcodeUppercase() //Function to convert all characters in postal code to be uppercase.
	{
		document.gmail.pcode.value = document.gmail.pcode.value.toUpperCase();
	}
	
function trimFirstname() //Function to trim the spaces in the first name.
	{
		document.gmail.firstname.value = document.gmail.firstname.value.trim();
	}

function trimLastname() //Function to trim the spaces in the last name.
	{
		document.gmail.lastname.value = document.gmail.lastname.value.trim();
	}

function capitalizeFirstname() //Function to capitalize first letter of first name.
	{
		if (document.gmail.firstname.value.length >= 1) 
			{
				var firstChar = document.gmail.firstname.value.charAt(0);
				var remainingChars = document.gmail.firstname.value.slice(1);
				var value = firstChar.toUpperCase() + remainingChars;
				document.gmail.firstname.value = value;
			}
	}

function capitalizeLastname() //Function to capitalize first letter of last name.
	{
		if (document.gmail.lastname.value.length >= 1) 
			{
				var firstChar = document.gmail.lastname.value.charAt(0);
				var remainingChars = document.gmail.lastname.value.slice(1);
				var value = firstChar.toUpperCase() + remainingChars;
				document.gmail.lastname.value = value;
			}
	}		