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
    if(firstname.value && lastname.value && phone.value && email.value && codemeli.value && sajamcode.value && shabacode.value){
        statusText.textContent= 'آماده سرمایه گذاری';
        statusText.style.color = '#039855';
    }else{
        statusText.textContent= 'منتظر تکمیل اطلاعات';
        statusText.style.color = '#B42318';
    }
}


window.addEventListener('load' , function () {
    profileForm.querySelectorAll('input').forEach((item)=>{
        item.value = '';
    })
})