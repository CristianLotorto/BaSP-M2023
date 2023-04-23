// Elements Selection
var loginForm = document.getElementById("login-form");
var continueButton = document.getElementById("login-btn-continue");
var email = document.getElementById("login-email");
var pass = document.getElementById("login-pass");
var loginErrorEmail = document.getElementById("email-error-list");
var loginErrorPass = document.getElementById("pass-error-list");

// Errors Array
var emailErrors = [];
var passErrors = [];
var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
function ifErrorInputStyle(input, inputErrorsArray) {
	if (inputErrorsArray.length > 0) {
		input.className = "error-input";
	}
}

// Email Validation Function
const emailValidation = () => {
	email.addEventListener("focus", () => {
		emailErrors = [];
		loginErrorEmail.innerHTML = "";
		email.className = "login-input";
		if (email.value == "Email") {
			email.value = "";
		}
	});

	email.addEventListener("blur", () => {
		if (email.value == "") {
			email.value = "Email";
			emailErrors.push("Email form is empty.");
		} else if (!emailPattern.test(email.value)) {
			emailErrors.push("Email pattern doesn't match.");
		} else {
			emailErrors = [];
		}

		ifErrorInputStyle(email, emailErrors);

		for (var i = 0; i < emailErrors.length; i++) {
			loginErrorEmail.innerHTML = `<li>${emailErrors[i]}</li>`;
		}
	});
};

// Password Validation Function
const passwordValidation = () => {
	pass.addEventListener("focus", () => {
		passErrors = [];
		loginErrorPass.innerHTML = "";
		pass.className = "login-input";
		if (pass.value == "Password") {
			pass.value = "";
			pass.setAttribute("type", "password");
		}
		addEventListener("keydown", (e) => {
			if (pass.value.length > 15) {
				if (e.key != "Backspace") {
					e.preventDefault();
				}
			}
		});
	});

	pass.addEventListener("blur", () => {
		if (pass.value == "") {
			pass.value = "Password";
			pass.setAttribute("type", "text");
			passErrors.push("Password input is empty.");
		} else if (pass.value.length < 7) {
			passErrors.push("Password input must have between 7 and 15 characters.");
		} else if (
			pass.value.split("").filter((char) => isNaN(char)).length == 0 ||
			pass.value.split("").filter((char) => !isNaN(parseInt(char))).length == 0
		) {
			passErrors.push("Password input must be a numbers/letters combination.");
		} else {
			passErrors = [];
		}

		ifErrorInputStyle(pass, passErrors);

		for (var i = 0; i < passErrors.length; i++) {
			loginErrorPass.innerHTML = `<li>${passErrors[i]}</li>`;
		}
	});
};

// Running Validation Functions
emailValidation();
passwordValidation();

// Login(Continue) button + validation conditions
continueButton.addEventListener("click", () => {
	// Validation Check
	if (emailErrors.length != 0 || passErrors != 0) {
		loginForm.addEventListener("submit", (e) => {
			e.preventDefault();
		});

		alert(
			"You couldn't sign in. There were some errors :( \n\n" +
				"Email: " +
				emailErrors +
				"\n" +
				"Password: " +
				passErrors
		);
	} else {
		loginForm.addEventListener("submit", (e) => {
			e.preventDefault();
		});
		alert("You are signed in! \n\n" + "Email: " + email.value + "\n" + "Password: " + pass.value);
	}
});
