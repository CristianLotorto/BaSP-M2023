// Elements Selection
var loginForm = document.getElementById("login-form");
var continueButton = document.getElementById("login-btn");
var email = document.getElementById("login-email");
var pass = document.getElementById("login-pass");
var loginErrorListEmail = document.getElementById("email-error-list");
var loginErrorListPass = document.getElementById("pass-error-list");

// Errors Array
var loginEmailErrors = [];
var loginPassErrors = [];

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

var loginBaseUrl = "https://api-rest-server.vercel.app/login";

// RegEx Pattern
var loginEmailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

// Input Style on Error
function ifErrorInputStyle(element, elementErrorsArray) {
	if (elementErrorsArray.length > 0) {
		element.className = "error-input";
	}
}

function loginEmailFocusEvent() {
	loginEmailErrors = [];
	loginErrorListEmail.innerHTML = "";
	email.className = "login-input";
}

// Password Validation Function
function loginPassFocusEvent() {
	loginPassErrors = [];
	loginErrorListPass.innerHTML = "";
	pass.className = "login-input";
	addEventListener("keydown", function (e) {
		if (pass.value.length > 15) {
			if (e.key != "Backspace") {
				e.preventDefault();
			}
		}
	});
}

function emailValidation() {
	if (!email.value) {
		loginEmailErrors.push("Email form is empty.");
	} else if (!loginEmailPattern.test(email.value)) {
		loginEmailErrors.push("Email pattern doesn't match.");
	} else {
		loginEmailErrors = [];
	}

	ifErrorInputStyle(email, loginEmailErrors);

	for (var i = 0; i < loginEmailErrors.length; i++) {
		loginErrorListEmail.innerHTML += `<li>${loginEmailErrors[i]}</li>`;
	}
}

function passValidation() {
	if (!pass.value) {
		loginPassErrors.push("Password form is empty.");
	} else if (pass.value.length < 7) {
		loginPassErrors.push("Password form must have between 7 and 15 characters.");
	} else if (
		pass.value.split("").filter(function (char) {
			return isNaN(char);
		}).length == 0 ||
		pass.value.split("").filter(function (char) {
			return !isNaN(parseInt(char));
		}).length == 0
	) {
		loginPassErrors.push("Password form must be a numbers/letters combination.");
	} else if (
		pass.value.split("").filter(function (char) {
			return symbolsArray.indexOf(char) != -1;
		}).length > 0
	) {
		loginPassErrors.push(
			"Password form must not contain blank spaces or special characters like ' . ', ' , ', ' / ', etc"
		);
	} else {
		loginPassErrors = [];
	}
	ifErrorInputStyle(pass, loginPassErrors);

	for (var i = 0; i < loginPassErrors.length; i++) {
		loginErrorListPass.innerHTML += `<li>${loginPassErrors[i]}</li>`;
	}
}

email.addEventListener("focus", loginEmailFocusEvent);
pass.addEventListener("focus", loginPassFocusEvent);

email.addEventListener("blur", emailValidation);
pass.addEventListener("blur", passValidation);

// Login(Continue) button + validation conditions

loginForm.addEventListener("submit", function (e) {
	// Validation Check
	e.preventDefault();

	var loginErrorMessage = "You couldn't sign in. There were some errors :( \n\n";

	loginErrorListEmail = "";
	loginErrorListPass = "";

	if (!email.value.trim()) {
		if (loginEmailErrors.indexOf("Email form is empty.") == -1) {
			loginEmailErrors.push("Email form is empty.");
		}
		ifErrorInputStyle(email, loginEmailErrors);
		for (var i = 0; i < loginEmailErrors.length; i++) {
			loginErrorListEmail.innerHTML += `<li>${loginEmailErrors[i]}</li>`;
		}
	} else if (!pass.value.trim) {
		if (loginPassErrors.indexOf("Password form is empty.") == -1) {
			loginPassErrors.push("Password form is empty.");
		}
		ifErrorInputStyle(pass, loginPassErrors);
		for (var i = 0; i < loginPassErrors.length; i++) {
			loginErrorListPass.innerHTML += `<li>${loginPassErrors[i]}</li>`;
		}
	}

	if (loginEmailErrors.length != 0 || loginPassErrors.length != 0) {
		if (loginEmailErrors.length != 0) {
			loginErrorMessage += "Email: " + loginEmailErrors + "\n";
		}
		if (loginPassErrors.length != 0) {
			loginErrorMessage += "Password: " + loginPassErrors;
		}
		alert(loginErrorMessage);
	} else {
		alert("You are signed in! \n\n" + "Email: " + email.value + "\n" + "Password: " + pass.value);

		fetch(`${loginBaseUrl}?email=${email.value}&password=${pass.value}`)
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
