const togglePassword = document.getElementById('togglePassword');
const phoneInput = document.getElementById('phoneInput');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitBtn');

const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

// Function to sync the checkboxes
function syncCheckboxes() {
    // Set the state of checkbox2 to match checkbox1
    checkbox2.checked = checkbox1.checked;
}

// Event listeners for both checkboxes
checkbox1.addEventListener('change', syncCheckboxes);
checkbox2.addEventListener('change', () => {
    // Set the state of checkbox1 to match checkbox2
    checkbox1.checked = checkbox2.checked;
});

const phoneRegex = /^[0-9\u06F0-\u06F9]{11}$/;  // 11 digits, numeric
const passwordLengthRegex = /^.{8,}$/;  // At least 8 characters
const containsNumberRegex = /\d/;
const specialCharRegex = /[!@#$%&]/;  // At least one special character (!, @, #, $, %, &)



function validateForm() {
    if (passwordLengthRegex.test(passwordInput.value)) {
        document.querySelector('.successMessage > div:first-child').classList.add('success');
    } else {
        document.querySelector('.successMessage > div:first-child').classList.remove('success');
    }

    if (containsNumberRegex.test(passwordInput.value)) {
        document.querySelector('.successMessage > div:nth-child(2)').classList.add('success');
    } else {
        document.querySelector('.successMessage > div:nth-child(2)').classList.remove('success');
    }

    if (specialCharRegex.test(passwordInput.value)) {
        document.querySelector('.successMessage > div:last-child').classList.add('success');
    } else {
        document.querySelector('.successMessage > div:last-child').classList.remove('success');
    }

    const phoneValid = phoneRegex.test(phoneInput.value);
    const firstNameFilled = firstNameInput.value.trim() !== '';
    const lastNameFilled = lastNameInput.value.trim() !== '';
    const passwordValid = passwordLengthRegex.test(passwordInput.value) &&
        containsNumberRegex.test(passwordInput.value) &&
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


togglePassword.addEventListener('click', () => {
    // Toggle the type attribute
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    // Toggle between eye and eye-off icon
    if (passwordInput.type === 'password') {
        togglePassword.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>
        `;
    } else {
        togglePassword.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
</svg>
        `;
    }
});

window.addEventListener('load' , function () {
    submitButton.disabled = 'true';
})