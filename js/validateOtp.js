
// otp

const otpInputs = document.querySelectorAll('.otp-input');
const submitButton3 = document.getElementById('submitOtp');

otpInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        const value = event.target.value;

        // Only allow numeric values
        if (!/^\d$/.test(value)) {
            event.target.value = '';
            return;
        }

        // Add 'fill' class when filled
        if (value) {
            input.classList.add('fill');
        }

        // Move to the next input if there's a value
        if (value && index < otpInputs.length - 1) {
            otpInputs[index + 1].disabled = false;
            otpInputs[index + 1].focus();
        }
        // Enable the submit button if all inputs are filled
        checkAllInputsFilled()
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && !input.value && index > 0) {
            // Remove 'fill' class on backspace
            input.classList.remove('fill')
            // Move to the previous input on Backspace if current input is empty
            otpInputs[index - 1].focus();
            otpInputs[index - 1].value = '';
            otpInputs[index].disabled = true;
        }
        // Enable the submit button if all inputs are filled
        checkAllInputsFilled()
    });
});

function checkAllInputsFilled() {
    const allFilled = Array.from(otpInputs).every(input => input.value);
    submitButton3.disabled = !allFilled;
}

document.getElementById('otpForm').addEventListener('submit', (event) => {
    // event.preventDefault();

    // Collect OTP value
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    console.log('Entered OTP:', otp);

    if (otp.length === otpInputs.length) {
        alert(`OTP Submitted: ${otp}`);
    } else {
        alert('Please fill in all OTP fields.');
    }
});

window.addEventListener('load' , function () {
    submitButton3.disabled = 'true';
    Array.from(document.getElementsByClassName('otp-input')).forEach((item)=>{
        item.value = '';
        item.disabled = 'true';
        document.getElementById('firstOtp').disabled = false;
    })
})

document.getElementById('otpForm').addEventListener('submit', function(event) {
    // event.preventDefault(); // جلوگیری از رفرش صفحه
});