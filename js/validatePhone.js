// phone number

// Select the input and button elements
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submitBtn');

// Function to validate the phone number
function validatePhoneNumber(phoneNumber) {
    const regex = /^[0-9\u06F0-\u06F9]{11}$/; // Regex to match exactly 11 digits
    return regex.test(phoneNumber);
}

// Add an event listener to the input field
phoneInput.addEventListener('input', () => {
    const isValid = validatePhoneNumber(phoneInput.value);
    submitButton.disabled = !isValid; // Enable the button if valid, disable otherwise
    // submitButton.addEventListener('click',function (e) {
    //     e.preventDefault();
    // })
});

window.addEventListener('load' , function () {
    submitButton.disabled = 'true';
    phoneInput.value = '';
})
