const phoneInput = document.getElementById('phoneInput');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitBtn');

const phoneRegex = /^\d{11}$/;  // 11 digits, numeric
const passwordLengthRegex = /^.{8,}$/;  // At least 8 characters
const specialCharRegex = /[!@#$%&]/;  // At least one special character (!, @, #, $, %, &)


function validateForm() {
    const phoneValid = phoneRegex.test(phoneInput.value);
    const firstNameFilled = firstNameInput.value.trim() !== '';
    const lastNameFilled = lastNameInput.value.trim() !== '';
    const passwordValid = passwordLengthRegex.test(passwordInput.value) &&
                          specialCharRegex.test(passwordInput.value);

    // Enable the submit button if all fields are valid
    submitButton.disabled = !(phoneValid && firstNameFilled && lastNameFilled && passwordValid);
}

// Event listeners for each input to validate on input change
phoneInput.addEventListener('input', validateForm);
firstNameInput.addEventListener('input', validateForm);
lastNameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Submit button click
document.getElementById('validationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
});