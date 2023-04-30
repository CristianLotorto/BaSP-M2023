var loginForm = document.getElementById("login-form");
var continueButton = document.getElementById("login-btn");
var loginEmail = document.getElementById("login-email");
var loginPass = document.getElementById("login-pass");
var loginErrorListEmail = document.getElementById("email-error-list");
var loginErrorListPass = document.getElementById("pass-error-list");

var loginEmailErrors = [];
var loginPassErrors = [];

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

var loginBaseUrl = "https://api-rest-server.vercel.app/login";
var loginEmailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

function ifErrorInputStyle(element, elementErrorsArray) {
	if (elementErrorsArray.length > 0) {
		element.className = "error-input";
	}
}

function errorsRender(input, inputErrorsArray, inputErrorsList) {
	ifErrorInputStyle(input, inputErrorsArray);

	for (var i = 0; i < inputErrorsArray.length; i++) {
		inputErrorsList.innerHTML += `<li>${inputErrorsArray[i]}</li>`;
	}
}

function focusEvent(input, inputErrorsList) {
	inputErrorsList.innerHTML = "";
	input.className = "login-input";
}

function isEmpty(input, inputErrorsArray, inputLabel) {
	if (input.value === "" || !input.value) {
		if (!inputErrorsArray.includes(`${inputLabel} form is empty.`)) {
			inputErrorsArray.push(`${inputLabel} form is empty.`);
		}
	}
}

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

function charactersNumberValidation(inputLabel, input, moreLessEqual, conditionNumber, inputErrorsArray) {
	if (input.value.length <= conditionNumber) {
		inputErrorsArray.push(`${inputLabel} form allows ${moreLessEqual} than ${conditionNumber} characters.`);
	}
}

function emailPatternValidation(input, inputErrorsArray, regEx) {
	isEmpty(input, inputErrorsArray, "Email");
	if (!regEx.test(input.value)) {
		inputErrorsArray.push("Email pattern doesn't match.");
	}
}

function loginEmailValidation() {
	loginEmail.addEventListener("focus", function () {
		focusEvent(loginEmail, loginErrorListEmail);
		loginEmailErrors = [];
	});

	loginEmail.addEventListener("blur", function () {
		isEmpty(loginEmail, loginEmailErrors, "Email");
		emailPatternValidation(loginEmail, loginEmailErrors, loginEmailPattern);
		errorsRender(loginEmail, loginEmailErrors, loginErrorListEmail);
	});
}

function loginPassValidation() {
	loginPass.addEventListener("focus", function () {
		focusEvent(loginPass, loginErrorListPass);
		loginPassErrors = [];
	});

	loginPass.addEventListener("blur", function () {
		isEmpty(loginPass, loginPassErrors, "Password");
		charactersNumberValidation("Password", loginPass, "more", 7, loginPassErrors);
		hasNumberAndLetters(loginPass, loginPassErrors, "Password");
		errorsRender(loginPass, loginPassErrors, loginErrorListPass);
	});
}

loginEmailValidation();
loginPassValidation();

function loginButton() {
	loginForm.addEventListener("submit", function (e) {
		e.preventDefault();

		var loginErrorMessage = "You couldn't sign in. There were some errors :( \n\n";

		loginErrorListEmail.innerHTML = "";
		loginErrorListPass.innerHTML = "";

		isEmpty(loginEmail, loginEmailErrors, "Email");
		isEmpty(loginPass, loginPassErrors, "Password");

		errorsRender(loginEmail, loginEmailErrors, loginErrorListEmail);
		errorsRender(loginPass, loginPassErrors, loginErrorListPass);

		if (loginEmailErrors.length > 0 || loginPassErrors.length > 0) {
			if (loginEmailErrors.length > 0) {
				loginErrorMessage += `Email:${loginEmailErrors.join("\n")} \n`;
			}
			if (loginPassErrors.length > 0) {
				loginErrorMessage += `Password:${loginPassErrors.join("\n")}`;
			}
			alert(loginErrorMessage);
		} else {
			alert(
				"You are signed in! \n\n" +
					"Email: " +
					loginEmail.value.trim() +
					"\n" +
					"Password: " +
					loginPass.value.trim()
			);

			fetch(`${loginBaseUrl}?email=${loginEmail.value.trim()}&password=${loginPass.value.trim()}`)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					if (data.success) {
						alert("Request has been successful!\n" + data.msg);
					} else {
						throw new Error("Request has been rejected :/ \n" + data.msg);
					}
				})
				.catch(function (err) {
					alert(err);
				});
		}
		loginEmailErrors = [];
		loginPassErrors = [];
	});
}

loginButton();
