const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("Form was submitted");

    const fullName = document.querySelector("#name");
    const fullNameError = document.querySelector("#nameError");
    const fullNameValue = fullName.value;

    if (checkInputLengthName(fullNameValue) === true) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
    }

    const answer = document.querySelector("#answer");
    const answerError = document.querySelector("#answerError");
    const answerValue = answer.value;

    if (checkInputLengthAnswer(answerValue) === true) {
        answerError.style.display = "none";
    }
    else {
        answerError.style.display = "block";
    }

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");

    const emailValue = email.value;

    if (checkInputLengthEmail(emailValue) === true) {
        emailError.style.display = "none;"
    }
    else {
        emailError.style.display = "block";
    }
    if (invalidEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    }
    else {
        invalidEmailError.style.display = "block";
    }

    const address = document.querySelector("#address");
    const addressError = document.querySelector("#addressError");
    const addressValue = address.value;

    if (checkInputLengthAddress(addressValue) === true) {
        addressError.style.display = "none";
    }
    else {
        addressError.style.display = "block";
    }

}

function checkInputLengthName(value) {
    const trimmedValueName = value.trim();

    if (trimmedValueName.length >= 2) {
        return true;
    }
    else {
        return false;
    }

}

function checkInputLengthAnswer(value) {
    const trimmedValueAnswer = value.trim();

    if (trimmedValueAnswer.length >= 10) {
        return true;
    }
    else {
        return false;
    }

}

function checkInputLengthEmail(value) {
    const trimmedValueEmail = value.trim();
    if (trimmedValueEmail.length >= 0) {
        return true;
    }
    else {
        return false;
    }

}

function checkInputLengthAddress(value) {
    const trimmedValueAddress = value.trim();
    if (trimmedValueAddress.length >= 15) {
        return true;
    }
    else {
        return false;
    }

}

function invalidEmail(email) {
    console.log("Valid e-mail was submitted");

    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}




