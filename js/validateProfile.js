let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let codemeli = document.getElementById('codemeli');
let sajamcode = document.getElementById('sajamcode');
let shabacode = document.getElementById('shabacode');
let statusText = document.getElementById('status');
let profileForm = document.getElementById('profileForm');


function validateForm() {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^\d{11}$/;
    const codemeliRegex = /^\d{10}$/;
    const sajamCodeRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;
    const shabaCodeRegex = /^IR\d{23}$/;

    if (firstname.value && lastname.value && phone.value && phoneNumberRegex.test(phone.value) && email.value && emailRegex.test(email.value) && codemeli.value && codemeliRegex.test(codemeli.value) && sajamcode.value && sajamCodeRegex.test(sajamcode.value) && shabacode.value && shabaCodeRegex.test(shabacode.value)) {
        statusText.textContent = 'آماده سرمایه گذاری';
        statusText.style.color = '#039855';
    } else {
        statusText.textContent = 'منتظر تکمیل اطلاعات';
        statusText.style.color = '#B42318';
    }
}


window.addEventListener('load', function () {
    profileForm.querySelectorAll('input').forEach((item) => {
        item.value = '';
    })
})