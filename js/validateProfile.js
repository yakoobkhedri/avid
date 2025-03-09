let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let phone = document.getElementById('phone2');
let email = document.getElementById('email');
let codemeli = document.getElementById('codemeli');
let sajamcode = document.getElementById('sajamcode');
let shabacode = document.getElementById('shabacode');
let statusText = document.getElementById('status');
let profileForm = document.getElementById('profileForm');


function validateForm() {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^[0-9\u06F0-\u06F9]{11}$/;
    const codemeliRegex = /^[\d۰-۹]{10}$/;
    const sajamCodeRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;
    const shabaCodeRegex = /^IR\d{23}$/;
    
    firstname.value ? document.querySelector('.firstSuccess').classList.add('active') : document.querySelector('.firstSuccess').classList.remove('active') ;
    lastname.value ? document.querySelector('.lastSuccess').classList.add('active') : document.querySelector('.lastSuccess').classList.remove('active') ;
    phone.value && phoneNumberRegex.test(phone.value) ? document.querySelector('.phoneSuccess').classList.add('active') : document.querySelector('.phoneSuccess').classList.remove('active') ;
    email.value && emailRegex.test(email.value) ? document.querySelector('.emailSuccess').classList.add('active') : document.querySelector('.emailSuccess').classList.remove('active') ;
    codemeli.value && codemeliRegex.test(codemeli.value) ? document.querySelector('.codemeliSuccess').classList.add('active') : document.querySelector('.codemeliSuccess').classList.remove('active') ;
    sajamcode.value && sajamCodeRegex.test(sajamcode.value) ? document.querySelector('.sajamcodeSuccess').classList.add('active') : document.querySelector('.sajamcodeSuccess').classList.remove('active') ;
    shabacode.value && shabaCodeRegex.test(shabacode.value) ? document.querySelector('.shabacodeSuccess').classList.add('active') : document.querySelector('.shabacodeSuccess').classList.remove('active') ;
    
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