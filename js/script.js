// Creating the variables for the elements
const btnSubscribe = document.getElementById("btnSubscribe");
const btnCloseSuccess = document.getElementById("closeSuccess");
const errorMessage = document.getElementById("errorMessage");
const signUpForm = document.getElementById("signUp");
const containerSignUp = document.querySelector(".containerSignUp");
const containerSuccess = document.querySelector(".containerSucces");

let emailInput = document.getElementById("email");
let emailText = document.getElementById("emailSent");

// Preventing the default action of the form
signUpForm.addEventListener("submit", function(e) {
    e.preventDefault();
});

// Function than resets the input
function resetInput() {
    emailInput.value = "";
}

//Function that validates the email
btnSubscribe.addEventListener("click", function() {
    var email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailInput.value.match(email)) {
        containerSignUp.style.display = "none";
        containerSuccess.style.display = "grid";
        emailText.innerHTML = emailInput.value;
        resetInput();
    } else {
        errorMessage.style.display = "block";
        emailInput.style.backgroundColor = "rgba(236, 185, 194, 0.5)";
        emailInput.style.border = "1px solid var(--tomato)";
    }
});

// Function that closes the success message
btnCloseSuccess.addEventListener("click", function() {
    containerSuccess.style.display = "none";
    containerSignUp.style.display = "flex";
});