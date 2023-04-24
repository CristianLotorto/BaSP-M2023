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
var passConfirmErrorsErrors = [];

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
var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

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
			inputErrorsArray.push(
				`${inputLabel} form allows only ${moreLessEqual} than ${conditionNumber} characters.`
			);
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
		if (input.value == "") {
			inputErrorsArray.push(`${inputLabel} form is empty.`);
		} else if (
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

// Only NUmbers Validation Function
function onlyNumbersValidation(input, inputErrorsArray, inputErrorsList, inputLabel) {
	input.addEventListener("blur", function () {
		if (input.value == "") {
			inputErrorsArray.push(`${inputLabel} form is empty.`);
		} else if (
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

// Email Validation Function
function emailPatternValidation(input, inputErrorsArray, regEx, inputErrorsList) {
	input.addEventListener("blur", function () {
		if (input.value == "") {
			inputErrorsArray.push("Email form is empty.");
		} else if (!regEx.test(input.value)) {
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

// Email Validation
function emailValidation() {
	focusEvent(signUpEmail, emailErrors, loginErrorEmail);
	emailPatternValidation(signUpEmail, emailErrors, emailPattern, loginErrorEmail);
}

// Running Validations
nameValidation();
lastNameValidation();
dniValidation();
phoneValidation();
emailValidation();
bornDateValidation();
