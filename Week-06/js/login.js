// Elements Selection
var loginForm = document.getElementById("login-form");
var continueButton = document.getElementById("login-btn");
var email = document.getElementById("login-email");
var pass = document.getElementById("login-pass");
var loginErrorEmail = document.getElementById("email-error-list");
var loginErrorPass = document.getElementById("pass-error-list");

// Errors Array
var emailErrors = [];
var passErrors = [];

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
var loginEmailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

// Input Style on Error
function ifErrorInputStyle(input, inputErrorsArray) {
	if (inputErrorsArray.length > 0) {
		input.className = "error-input";
	}
}

// Email Validation Function
function emailValidation() {
	email.addEventListener("focus", function () {
		emailErrors = [];
		loginErrorEmail.innerHTML = "";
		email.className = "login-input";
		if (email.value == "Email") {
			email.value = "";
		}
	});

	email.addEventListener("blur", function () {
		if (email.value == "") {
			email.value = "Email";
			emailErrors.push("Email form is empty.");
		} else if (!loginEmailPattern.test(email.value)) {
			emailErrors.push("Email pattern doesn't match.");
		} else {
			emailErrors = [];
		}

		ifErrorInputStyle(email, emailErrors);

		for (var i = 0; i < emailErrors.length; i++) {
			loginErrorEmail.innerHTML += `<li>${emailErrors[i]}</li>`;
		}
	});
}

// Password Validation Function
function passwordValidation() {
	pass.addEventListener("focus", function () {
		passErrors = [];
		loginErrorPass.innerHTML = "";
		pass.className = "login-input";
		if (pass.value == "Password") {
			pass.value = "";
			pass.setAttribute("type", "password");
		}
		addEventListener("keydown", function (e) {
			if (pass.value.length > 15) {
				if (e.key != "Backspace") {
					e.preventDefault();
				}
			}
		});
	});

	pass.addEventListener("blur", function () {
		if (pass.value == "") {
			pass.value = "Password";
			pass.setAttribute("type", "text");
			passErrors.push("Password input is empty.");
		} else if (pass.value.length < 7) {
			passErrors.push("Password input must have between 7 and 15 characters.");
		} else if (
			pass.value.split("").filter(function (char) {
				return isNaN(char);
			}).length == 0 ||
			pass.value.split("").filter(function (char) {
				return !isNaN(parseInt(char));
			}).length == 0
		) {
			passErrors.push("Password input must be a numbers/letters combination.");
		} else if (
			pass.value.split("").filter(function (char) {
				return symbolsArray.indexOf(char) != -1;
			}).length > 0
		) {
			passErrors.push(
				"Password form must not contain blank spaces or special characters like ' . ', ' , ', ' / ', etc"
			);
		} else {
			passErrors = [];
		}

		ifErrorInputStyle(pass, passErrors);

		for (var i = 0; i < passErrors.length; i++) {
			loginErrorPass.innerHTML += `<li>${passErrors[i]}</li>`;
		}
	});
}

// Running Validation Functions
emailValidation();
passwordValidation();

// Login(Continue) button + validation conditions
loginForm.addEventListener("submit", function (e) {
	// Validation Check
	e.preventDefault();
	if (emailErrors.length != 0 || passErrors.length != 0) {
		alert(
			"You couldn't sign in. There were some errors :( \n\n" +
				"Email: " +
				emailErrors +
				"\n" +
				"Password: " +
				passErrors
		);
	} else {
		alert("You are signed in! \n\n" + "Email: " + email.value + "\n" + "Password: " + pass.value);
	}
});
