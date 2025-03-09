function convertToEnglishNumbers(input) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    return input.split('').map(char => {
        // بررسی عدد فارسی
        const persianIndex = persianNumbers.indexOf(char);
        if (persianIndex !== -1) return englishNumbers[persianIndex];
        
        // بررسی عدد عربی
        const arabicIndex = arabicNumbers.indexOf(char);
        if (arabicIndex !== -1) return englishNumbers[arabicIndex];
        
        // اگر عدد نبود، همان کاراکتر را برگردان
        return char;
    }).join('');
}

function checkNationalCode() {
    const codemeli = document.getElementById('codemeli');
    const submitButton = document.getElementById('submitButton');
    
    // تبدیل اعداد فارسی و عربی به انگلیسی
    const englishCode = convertToEnglishNumbers(codemeli.value);
    
    // بررسی اینکه آیا طول کد ملی ۱۰ رقم است و فقط عدد وارد شده است
    if (englishCode.length === 10 && /^\d+$/.test(englishCode)) {
        submitButton.disabled = false; // فعال کردن دکمه سابمیت
    } else {
        submitButton.disabled = true; // غیرفعال کردن دکمه سابمیت
    }
}

// اضافه کردن event listener برای فرم
document.getElementById('nationalCodeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از رفرش صفحه
});

// اضافه کردن event listener برای فیلد کد ملی
document.getElementById('codemeli').addEventListener('input', checkNationalCode);