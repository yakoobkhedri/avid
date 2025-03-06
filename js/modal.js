let closeAuthModal = document.getElementById('closeAuthModal');

closeAuthModal.addEventListener('click' , function () {
    closeAuthModal.parentElement.parentElement.classList.remove('active');
})