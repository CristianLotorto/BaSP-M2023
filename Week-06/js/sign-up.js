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

// Input Style on Error
function ifErrorInputStyle(input, inputErrorsArray) {
	if (inputErrorsArray.length > 0) {
		input.className = "sign-up-input-error";
	}
}

// Focus event
function focusEvent(input, inputErrorsArray, inputErrorsList) {
	input.addEventListener("focus", function () {
		inputErrorsArray = [];
		inputErrorsList.innerHTML = "";
		input.className = "sign-up-input";
	});
}

// Is Empty Validation
function isEmpty(input, inputErrorsArray, inputErrorsList, inputLabel) {
	if (input.value == "") {
		inputErrorsArray.push(`${inputLabel} form is empty.`);
	} else {
		inputErrorsArray = [];
	}

	errorsRender(input, inputErrorsArray, inputErrorsList);
}

// Has Number and Letters Validation
function hasNumberAndLetters(input, inputErrorsArray, inputErrorsList, inputLabel) {
	if (
		input.value.split("").filter(function (char) {
			return isNaN(char);
		}).length == 0 ||
		input.value.split("").filter(function (char) {
			return !isNaN(parseInt(char));
		}).length == 0
	) {
		inputErrorsArray.push(`${inputLabel} should have letters and numbers.`);
	} else {
		inputErrorsArray = [];
	}

	errorsRender(input, inputErrorsArray, inputErrorsList);
}

// Characters Number Validation
function charactersNumberValidation(
	inputLabel,
	input,
	moreLessEqual,
	conditionNumber,
	inputErrorsArray,
	inputErrorsList
) {
	input.addEventListener("blur", function () {
		if (input.value.length <= conditionNumber) {
			inputErrorsArray.push(`${inputLabel} form allows ${moreLessEqual} than ${conditionNumber} characters.`);
		} else {
			inputErrorsArray = [];
		}
		errorsRender(input, inputErrorsArray, inputErrorsList);
	});
}

// Errors List Render Function
function errorsRender(input, inputErrorsArray, inputErrorsList) {
	ifErrorInputStyle(input, inputErrorsArray);

	for (var i = 0; i < inputErrorsArray.length; i++) {
		inputErrorsList.innerHTML = `<li>${inputErrorsArray[i]}</li>`;
	}
}

// Only Letters Validation Function
function onlyLettersValidation(input, inputErrorsArray, inputErrorsList, inputLabel) {
	input.addEventListener("blur", function () {
		isEmpty(input, inputErrorsArray, inputErrorsList, inputLabel);
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
		} else {
			inputErrorsArray = [];
		}

		errorsRender(input, inputErrorsArray, inputErrorsList);
	});
}

// Only Numbers Validation Function
function onlyNumbersValidation(input, inputErrorsArray, inputErrorsList, inputLabel) {
	input.addEventListener("blur", function () {
		isEmpty(input, inputErrorsArray, inputErrorsList, inputLabel);
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
		} else {
			inputErrorsArray = [];
		}

		errorsRender(input, inputErrorsArray, inputErrorsList);
	});
}

// Address Validation Function
function addressPatternValidation(input, inputErrorsArray, inputErrorsList) {
	var cleanAddress;
	input.addEventListener("blur", function () {
		cleanAddress = input.value.trim();
		if (
			cleanAddress.split("").filter(function (element) {
				return element.indexOf(" ") != -1;
			}).length != 1
		) {
			inputErrorsArray.push("Address form should have one blank space");
		} else {
			inputErrorsArray = [];
		}
		hasNumberAndLetters(input, inputErrorsArray, inputErrorsList, "Address");
		isEmpty(input, inputErrorsArray, inputErrorsList, "Address");

		errorsRender(input, inputErrorsArray, inputErrorsList);
	});
}

// Email Validation Function
function emailPatternValidation(input, inputErrorsArray, regEx, inputErrorsList) {
	input.addEventListener("blur", function () {
		isEmpty(input, inputErrorsArray, inputErrorsList, "Email");
		if (!regEx.test(input.value)) {
			inputErrorsArray.push("Email pattern doesn't match.");
		} else {
			inputErrorsArray = [];
		}

		errorsRender(input, inputErrorsArray, inputErrorsList);
	});
}

// Name Validation
function nameValidation() {
	focusEvent(signUpName, nameErrors, signUpErrorName);
	charactersNumberValidation("Name", signUpName, "more", 3, nameErrors, signUpErrorName);
	onlyLettersValidation(signUpName, nameErrors, signUpErrorName, "Name");
}

// Last Name Validation
function lastNameValidation() {
	focusEvent(signUpLastName, lastNameErrors, signUpErrorLastName);
	charactersNumberValidation("Last name", signUpLastName, "more", 3, lastNameErrors, signUpErrorLastName);
	onlyLettersValidation(signUpLastName, lastNameErrors, signUpErrorLastName, "Last name");
}

// DNI Validation
function dniValidation() {
	focusEvent(signUpDni, dniErrors, signUpErrorDni);
	charactersNumberValidation("DNI", signUpDni, "more", 7, dniErrors, signUpErrorDni);
	onlyNumbersValidation(signUpDni, dniErrors, signUpErrorDni, "DNI");
}

// Phone Validation
function phoneValidation() {
	focusEvent(signUpPhone, phoneErrors, signUpErrorPhone);
	// Characters Number Validation
	signUpPhone.addEventListener("blur", function () {
		if (signUpPhone.value.length != 10) {
			phoneErrors.push(`Phone form must have 10 numbers.`);
		} else {
			phoneErrors = [];
		}
		errorsRender(signUpPhone, phoneErrors, signUpErrorPhone);
	});

	onlyNumbersValidation(signUpPhone, phoneErrors, signUpErrorPhone, "Phone number");
}

// Address Validation
function addressValidation() {
	focusEvent(signUpAddress, addressErrors, signUpErrorAddress);
	charactersNumberValidation("Address", signUpAddress, "more", 4, addressErrors, signUpErrorAddress);
	addressPatternValidation(signUpAddress, addressErrors, signUpErrorAddress);
}

// Town Validation
function townValidation() {
	focusEvent(signUpTown, townErrors, signUpErrorTown);

	charactersNumberValidation("Town", signUpTown, "more", 3, townErrors, signUpErrorTown);
	signUpTown.addEventListener("blur", function () {
		isEmpty(signUpTown, townErrors, signUpErrorTown, "Town");
	});
}

// Post Code Validation
function postCodeValidation() {
	focusEvent(signUpPostCode, postCodeErrors, signUpErrorPostCode);
	signUpPostCode.addEventListener("blur", function () {
		if (this.value.length < 4 || this.value.length > 5) {
			postCodeErrors.push("Post code allow 4 or 5 numbers.");
		} else {
			postCodeErrors = [];
		}

		errorsRender(signUpPostCode, postCodeErrors, signUpErrorPostCode);
	});
	onlyNumbersValidation(signUpPostCode, postCodeErrors, signUpErrorPostCode, "Post code");
}

// Email Validation
function emailValidation() {
	focusEvent(signUpEmail, emailErrors, signUpErrorEmail);
	emailPatternValidation(signUpEmail, emailErrors, signUpEmailPattern, signUpErrorEmail);
}

// Password Validation
function passwordValidation() {
	focusEvent(signUpPass, passErrors, signUpErrorPass);
	charactersNumberValidation("Password", signUpPass, "more", 7, passErrors, signUpErrorPass);
	signUpPass.addEventListener("blur", function () {
		hasNumberAndLetters(signUpPass, passErrors, signUpErrorPass, "Password");
		isEmpty(signUpPass, passErrors, signUpErrorPass, "Password");
	});
}

// Repeat Password Validation
function repeatPasswordValidation() {
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
phoneValidation();
addressValidation();
townValidation();
postCodeValidation();
emailValidation();
passwordValidation();
repeatPasswordValidation();
