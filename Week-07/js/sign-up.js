var signUpForm = document.getElementById("sign-up-form");
var signUpName = document.getElementById("register-name");
var signUpLastName = document.getElementById("register-last-name");
var signUpDni = document.getElementById("register-dni");
var signUpBornDate = document.getElementById("register-born-date");
var signUpPhone = document.getElementById("register-phone");
var signUpAddress = document.getElementById("register-address");
var signUpTown = document.getElementById("register-town");
var signUpPostCode = document.getElementById("register-postcode");
var signUpEmail = document.getElementById("register-email");
var signUpPass = document.getElementById("register-password");
var signUpPassConfirm = document.getElementById("register-rep-password");
var signUpErrorName = document.getElementById("name-error-list");
var signUpErrorLastName = document.getElementById("last-name-error-list");
var signUpErrorDni = document.getElementById("dni-error-list");
var signUpErrorBornDate = document.getElementById("born-date-error-list");
var signUpErrorPhone = document.getElementById("phone-error-list");
var signUpErrorAddress = document.getElementById("address-error-list");
var signUpErrorTown = document.getElementById("town-error-list");
var signUpErrorPostCode = document.getElementById("postcode-error-list");
var signUpErrorEmail = document.getElementById("email-error-list");
var signUpErrorPass = document.getElementById("pass-error-list");
var signUpErrorPassConfirm = document.getElementById("pass-rep-error-list");

// Errors Array
var nameErrors = [];
var lastNameErrors = [];
var dniErrors = [];
var bornDateErrors = [];
var phoneErrors = [];
var addressErrors = [];
var townErrors = [];
var postCodeErrors = [];
var emailErrors = [];
var passErrors = [];
var passConfirmErrors = [];

// Symbols Array
var symbolsArray = [
	" ",
	".",
	",",
	"[",
	"]",
	"{",
	"}",
	"'",
	'"',
	"´",
	"*",
	"+",
	"-",
	"_",
	";",
	":",
	"|",
	"°",
	"!",
	"#",
	"$",
	"%",
	"&",
	"/",
	"(",
	")",
	"=",
	"¿",
	"?",
	"¡",
	"¨",
	"~",
	"^",
	"`",
	"¬",
];

// RegEx Pattern
var signUpEmailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

var signUpBaseUrl = "https://api-rest-server.vercel.app/signup";

// Input Style on Error
function ifErrorInputStyle(input, inputErrorsArray) {
	if (inputErrorsArray.length > 0) {
		input.className = "sign-up-input-error";
	}
}

// Focus event
function focusEvent(input, inputErrorsList) {
	inputErrorsList.innerHTML = "";
	input.className = "sign-up-input";
}

// Is Empty Validation
function isEmpty(input, inputErrorsArray, inputLabel) {
	if (input.value === "" || !input.value) {
		if (!inputErrorsArray.includes(`${inputLabel} form is empty.`)) {
			inputErrorsArray.push(`${inputLabel} form is empty.`);
		}
	}
}

// Has Number and Letters Validation
function hasNumberAndLetters(input, inputErrorsArray, inputLabel) {
	if (
		input.value.split("").filter(function (char) {
			return isNaN(char);
		}).length == 0 ||
		input.value.split("").filter(function (char) {
			return !isNaN(parseInt(char));
		}).length == 0
	) {
		inputErrorsArray.push(`${inputLabel} should have letters and numbers.`);
	}
}

// Characters Number Validation
function charactersNumberValidation(inputLabel, input, moreLessEqual, conditionNumber, inputErrorsArray) {
	if (input.value.length <= conditionNumber) {
		inputErrorsArray.push(`${inputLabel} form allows ${moreLessEqual} than ${conditionNumber} characters.`);
	}
}

// Errors List Render Function
function errorsRender(input, inputErrorsArray, inputErrorsList) {
	ifErrorInputStyle(input, inputErrorsArray);

	for (var i = 0; i < inputErrorsArray.length; i++) {
		inputErrorsList.innerHTML += `<li>${inputErrorsArray[i]}</li>`;
	}
}

// Only Letters Validation Function
function onlyLettersValidation(input, inputErrorsArray, inputLabel) {
	isEmpty(input, inputErrorsArray, inputLabel);
	if (
		input.value.split("").filter(function (char) {
			return !isNaN(parseInt(char));
		}).length > 0
	) {
		inputErrorsArray.push(`${inputLabel} form allows only letters.`);
	} else if (
		input.value.split("").filter(function (char) {
			return symbolsArray.indexOf(char) != -1;
		}).length > 0
	) {
		inputErrorsArray.push(
			`${inputLabel} form must not contain blank spaces or special characters like ' . ', ' , ', ' / ', etc`
		);
	}
}

// Only Numbers Validation Function
function onlyNumbersValidation(input, inputErrorsArray, inputLabel) {
	isEmpty(input, inputErrorsArray, inputLabel);
	if (
		input.value.split("").filter(function (char) {
			return isNaN(parseInt(char));
		}).length > 0
	) {
		inputErrorsArray.push(`${inputLabel} form allows only numbers.`);
	} else if (
		input.value.split("").filter(function (char) {
			return symbolsArray.indexOf(char) != -1;
		}).length > 0
	) {
		inputErrorsArray.push(
			`${inputLabel} form must not contain blank spaces or special characters like ' . ', ' , ', ' / ', etc`
		);
	}
}

// Address Validation Function
function addressPatternValidation(input, inputErrorsArray) {
	isEmpty(input, inputErrorsArray, "Address");
	hasNumberAndLetters(input, inputErrorsArray, "Address");
	var cleanAddress;
	cleanAddress = input.value.trim();
	if (
		cleanAddress.split("").filter(function (char) {
			return char === " ";
		}).length != 1
	) {
		inputErrorsArray.push("Address form should have one blank space");
	}
}

// Email Validation Function
function emailPatternValidation(input, inputErrorsArray, regEx) {
	isEmpty(input, inputErrorsArray, "Email");
	if (!regEx.test(input.value)) {
		inputErrorsArray.push("Email pattern doesn't match.");
	}
}

//Local Storage Save Function
function setLocalStorage(element) {
	localStorage.setItem("id", element.data.id);
	localStorage.setItem("name", element.data.name);
	localStorage.setItem("lastName", element.data.lastName);
	localStorage.setItem("dni", element.data.dni);
	localStorage.setItem("dob", element.data.dob);
	localStorage.setItem("phone", element.data.phone);
	localStorage.setItem("address", element.data.address);
	localStorage.setItem("city", element.data.city);
	localStorage.setItem("zip", element.data.zip);
	localStorage.setItem("email", element.data.email);
	localStorage.setItem("password", element.data.password);
}

//Local Storage Get Function
function getLocalStorage() {
	var storageName = localStorage.getItem("name");
	var storageLastName = localStorage.getItem("lastName");
	var storageDni = localStorage.getItem("dni");
	var storageDoB = localStorage.getItem("dob");
	var storagePhone = localStorage.getItem("phone");
	var storageAddress = localStorage.getItem("address");
	var storageCity = localStorage.getItem("city");
	var storageZip = localStorage.getItem("zip");
	var storageEmail = localStorage.getItem("email");
	var storagePass = localStorage.getItem("password");

	if (
		storageName &&
		storageLastName &&
		storageDni &&
		storageDoB &&
		storagePhone &&
		storageAddress &&
		storageCity &&
		storageZip &&
		storageEmail &&
		storagePass
	) {
		signUpName.value = storageName;
		signUpLastName.value = storageLastName;
		signUpDni.value = storageDni;
		signUpBornDate.valueAsDate = new Date(storageDoB);
		signUpPhone.value = storagePhone;
		signUpAddress.value = storageAddress;
		signUpTown.value = storageCity;
		signUpPostCode.value = storageZip;
		signUpEmail.value = storageEmail;
		signUpPass.value = storagePass;
	}
}

// Name Validation
function nameValidation() {
	signUpName.addEventListener("focus", function () {
		focusEvent(signUpName, signUpErrorName);
		nameErrors = [];
	});
	signUpName.addEventListener("blur", function () {
		charactersNumberValidation("Name", signUpName, "more", 3, nameErrors);
		onlyLettersValidation(signUpName, nameErrors, "Name");
		errorsRender(signUpName, nameErrors, signUpErrorName);
	});
}

// Last Name Validation
function lastNameValidation() {
	signUpLastName.addEventListener("focus", function () {
		focusEvent(signUpLastName, signUpErrorLastName);
		lastNameErrors = [];
	});

	signUpLastName.addEventListener("blur", function () {
		charactersNumberValidation("Last name", signUpLastName, "more", 3, lastNameErrors);
		onlyLettersValidation(signUpLastName, lastNameErrors, "Last name");
		errorsRender(signUpLastName, lastNameErrors, signUpErrorLastName);
	});
}

// DNI Validation
function dniValidation() {
	signUpDni.addEventListener("focus", function () {
		focusEvent(signUpDni, signUpErrorDni);
		dniErrors = [];
	});

	signUpDni.addEventListener("blur", function () {
		charactersNumberValidation("DNI", signUpDni, "more", 7, dniErrors);
		onlyNumbersValidation(signUpDni, dniErrors, "DNI");
		errorsRender(signUpDni, dniErrors, signUpErrorDni);
	});
}

// Born Date Validation
var formattedDate = [];
function bornDateValidation() {
	signUpBornDate.addEventListener("focus", function () {
		focusEvent(signUpBornDate, signUpErrorBornDate);
		bornDateErrors = [];
		formattedDate = [];
	});

	signUpBornDate.addEventListener("blur", function () {
		isEmpty(signUpBornDate, bornDateErrors, "Born date");

		var dateEl = signUpBornDate.value.split("-");
		formattedDate.push(dateEl[2] + "/" + dateEl[1] + "/" + dateEl[0]);
		formattedDate.push(dateEl[1] + "/" + dateEl[2] + "/" + dateEl[0]);

		errorsRender(signUpBornDate, bornDateErrors, signUpErrorBornDate);
	});
}

// Phone Validation
function phoneValidation() {
	signUpPhone.addEventListener("focus", function () {
		focusEvent(signUpPhone, signUpErrorPhone);
		phoneErrors = [];
	});

	signUpPhone.addEventListener("blur", function () {
		onlyNumbersValidation(signUpPhone, phoneErrors, "Phone number");
		if (signUpPhone.value.length != 10) {
			phoneErrors.push(`Phone form must have 10 numbers.`);
		} else {
			phoneErrors = [];
		}
		errorsRender(signUpPhone, phoneErrors, signUpErrorPhone);
	});
}

// Address Validation
function addressValidation() {
	signUpAddress.addEventListener("focus", function () {
		focusEvent(signUpAddress, signUpErrorAddress);
		addressErrors = [];
	});

	signUpAddress.addEventListener("blur", function () {
		charactersNumberValidation("Address", signUpAddress, "more", 4, addressErrors);
		addressPatternValidation(signUpAddress, addressErrors);
		errorsRender(signUpAddress, addressErrors, signUpErrorAddress);
	});
}

// Town Validation
function townValidation() {
	signUpTown.addEventListener("focus", function () {
		focusEvent(signUpTown, signUpErrorTown);
		townErrors = [];
	});

	signUpTown.addEventListener("blur", function () {
		isEmpty(signUpTown, townErrors, "Town");
		charactersNumberValidation("Town", signUpTown, "more", 3, townErrors);
		errorsRender(signUpTown, townErrors, signUpErrorTown);
	});
}

// Post Code Validation
function postCodeValidation() {
	signUpPostCode.addEventListener("focus", function () {
		focusEvent(signUpPostCode, signUpErrorPostCode);
		postCodeErrors = [];
	});

	signUpPostCode.addEventListener("blur", function () {
		onlyNumbersValidation(signUpPostCode, postCodeErrors, "Post code");
		if (this.value.length < 4 || this.value.length > 5) {
			postCodeErrors.push("Post code allow 4 or 5 numbers.");
		} else {
			postCodeErrors = [];
		}

		errorsRender(signUpPostCode, postCodeErrors, signUpErrorPostCode);
	});
}

// Email Validation
function emailValidation() {
	signUpEmail.addEventListener("focus", function () {
		focusEvent(signUpEmail, signUpErrorEmail);
		emailErrors = [];
	});

	signUpEmail.addEventListener("blur", function () {
		emailPatternValidation(signUpEmail, emailErrors, signUpEmailPattern);
		errorsRender(signUpEmail, emailErrors, signUpErrorEmail);
	});
}

// Password Validation
function passwordValidation() {
	signUpPass.addEventListener("focus", function () {
		focusEvent(signUpPass, signUpErrorPass);
		passErrors = [];
	});

	signUpPass.addEventListener("blur", function () {
		isEmpty(signUpPass, passErrors, "Password");
		charactersNumberValidation("Password", signUpPass, "more", 7, passErrors);
		hasNumberAndLetters(signUpPass, passErrors, "Password");
		errorsRender(signUpPass, passErrors, signUpErrorPass);
	});
}

// Repeat Password Validation
function repeatPasswordValidation() {
	signUpPassConfirm.addEventListener("focus", function () {
		focusEvent(signUpPassConfirm, signUpErrorPassConfirm);
		passConfirmErrors = [];
	});

	signUpPassConfirm.addEventListener("blur", function () {
		if (signUpPassConfirm.value != signUpPass.value) {
			passConfirmErrors.push("Passwords doesn't match");
		} else {
			passConfirmErrors = [];
		}
		errorsRender(signUpPassConfirm, passConfirmErrors, signUpErrorPassConfirm);
	});
}

// Running Validations
nameValidation();
lastNameValidation();
dniValidation();
bornDateValidation();
phoneValidation();
addressValidation();
townValidation();
postCodeValidation();
emailValidation();
passwordValidation();
repeatPasswordValidation();

// Register Button
function registerButton() {
	var errorMessage = "You couldn't sign up. There were some errors :( \n\n";
	var message = "You are signed up! \n\n";
	signUpForm.addEventListener("submit", function (e) {
		e.preventDefault();

		errorMessage = "You couldn't sign up. There were some errors :( \n\n";
		message = "You are signed up! \n\n";

		signUpErrorName.innerHTML = "";
		signUpErrorLastName.innerHTML = "";
		signUpErrorDni.innerHTML = "";
		signUpErrorBornDate.innerHTML = "";
		signUpErrorPhone.innerHTML = "";
		signUpErrorAddress.innerHTML = "";
		signUpErrorTown.innerHTML = "";
		signUpErrorPostCode.innerHTML = "";
		signUpErrorEmail.innerHTML = "";
		signUpErrorPass.innerHTML = "";
		signUpErrorPassConfirm.innerHTML = "";

		isEmpty(signUpName, nameErrors, "Name");
		isEmpty(signUpLastName, lastNameErrors, "Last name");
		isEmpty(signUpDni, dniErrors, "DNI");
		isEmpty(signUpBornDate, bornDateErrors, "Born date");
		isEmpty(signUpPhone, phoneErrors, "Phone");
		isEmpty(signUpAddress, addressErrors, "Address");
		isEmpty(signUpTown, townErrors, "Town");
		isEmpty(signUpPostCode, postCodeErrors, "Post code");
		isEmpty(signUpEmail, emailErrors, "Email");
		isEmpty(signUpPass, passErrors, "Password");
		isEmpty(signUpPassConfirm, passConfirmErrors, "Password confirmation");

		errorsRender(signUpName, nameErrors, signUpErrorName);
		errorsRender(signUpLastName, lastNameErrors, signUpErrorLastName);
		errorsRender(signUpDni, dniErrors, signUpErrorDni);
		errorsRender(signUpBornDate, bornDateErrors, signUpErrorBornDate);
		errorsRender(signUpPhone, phoneErrors, signUpErrorPhone);
		errorsRender(signUpAddress, addressErrors, signUpErrorAddress);
		errorsRender(signUpTown, townErrors, signUpErrorTown);
		errorsRender(signUpPostCode, postCodeErrors, signUpErrorPostCode);
		errorsRender(signUpEmail, emailErrors, signUpErrorEmail);
		errorsRender(signUpPass, passErrors, signUpErrorPass);
		errorsRender(signUpPassConfirm, passConfirmErrors, signUpErrorPassConfirm);

		if (
			nameErrors.length > 0 ||
			lastNameErrors.length > 0 ||
			dniErrors.length > 0 ||
			bornDateErrors.length > 0 ||
			phoneErrors.length > 0 ||
			addressErrors.length > 0 ||
			townErrors.length > 0 ||
			postCodeErrors.length > 0 ||
			emailErrors.length > 0 ||
			passErrors.length > 0 ||
			passConfirmErrors.length > 0
		) {
			if (nameErrors.length > 0) {
				errorMessage += `Name: ${nameErrors.join("\n")} \n`;
			}
			if (lastNameErrors.length > 0) {
				errorMessage += `Last name: ${lastNameErrors.join("\n")} \n`;
			}
			if (dniErrors.length > 0) {
				errorMessage += `DNI: ${dniErrors.join("\n")}\n`;
			}
			if (bornDateErrors.length > 0) {
				errorMessage += `Born Date: ${bornDateErrors.join("\n")} \n`;
			}
			if (phoneErrors.length > 0) {
				errorMessage += `Phone: ${phoneErrors.join("\n")} \n`;
			}
			if (addressErrors.length > 0) {
				errorMessage += `Address: ${addressErrors.join("\n")} \n`;
			}
			if (townErrors.length > 0) {
				errorMessage += `Town: ${townErrors.join("\n")} \n`;
			}
			if (postCodeErrors.length > 0) {
				errorMessage += `Post Code: ${postCodeErrors.join("\n")} \n`;
			}
			if (emailErrors.length > 0) {
				errorMessage += `Email: ${emailErrors.join("\n")} \n`;
			}
			if (passErrors.length > 0) {
				errorMessage += `Password: ${passErrors.join("\n")} \n`;
			}
			if (passConfirmErrors.length > 0) {
				errorMessage += `Pass Confirmation: ${passConfirmErrors.join("\n")} \n`;
			}

			alert(errorMessage);
		} else {
			message += `
					Name: ${signUpName.value}\n
					Last name: ${signUpLastName.value}\n
					DNI: ${signUpDni.value}\n
					Born date: ${formattedDate[0]}\n
					Phone: ${signUpPhone.value}\n
					Address: ${signUpAddress.value}\n
					Town: ${signUpTown.value}\n
					Post code: ${signUpPostCode.value}\n
					Email: ${signUpEmail.value}\n
					Password: ${signUpPass.value}`;

			alert(message);

			fetch(
				`${signUpBaseUrl}?
				name=${signUpName.value}&
				lastName=${signUpLastName.value}&
				dni=${signUpDni.value}&
				dob=${formattedDate[1]}&
				phone=${signUpPhone.value}&
				address=${signUpAddress.value}&
				city=${signUpTown.value}&
				zip=${signUpPostCode.value}&
				email=${signUpEmail.value}&
				password=${signUpPass.value}`
			)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					if (data.success) {
						alert("Sign up has been successful!\n" + data.msg);
						setLocalStorage(data);
					} else {
						var responseErrorMsg;
						data.errors.forEach((element) => {
							responseErrorMsg += element.msg + "\n";
						});
						throw new Error("Sign up has been rejected :/ \n" + responseErrorMsg);
					}
				})
				.catch(function (err) {
					alert(err);
				});
		}
		nameErrors = [];
		lastNameErrors = [];
		dniErrors = [];
		bornDateErrors = [];
		phoneErrors = [];
		addressErrors = [];
		townErrors = [];
		postCodeErrors = [];
		emailErrors = [];
		passErrors = [];
		passConfirmErrors = [];
	});
}

registerButton();

window.onload = getLocalStorage();
