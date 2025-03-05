function checkNationalCode() {
    const codemeli = document.getElementById('codemeli');
    const submitButton = document.getElementById('submitButton');
    
    // بررسی اینکه آیا طول کد ملی ۱۰ رقم است و فقط عدد وارد شده است
    if (codemeli.value.length === 10 && /^\d+$/.test(codemeli.value)) {
        submitButton.disabled = false; // فعال کردن دکمه سابمیت
    } else {
        submitButton.disabled = true; // غیرفعال کردن دکمه سابمیت
    }
}

// اضافه کردن event listener برای فرم
document.getElementById('nationalCodeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از رفرش صفحه
});