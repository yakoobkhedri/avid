let sidebar = document.getElementById('sidebar');
let openSidebar = document.getElementById('openSidebar');

openSidebar.addEventListener('click', function () {
    sidebar.classList.add('open');
    document.getElementById('overlay').classList.add('active');
    document.querySelector('body').style.overflow = 'hidden';
})
document.getElementById('overlay').addEventListener('click' , function () {
    this.classList.remove('active');
    sidebar.classList.remove('open');
    document.querySelector('body').style.overflow = 'auto';
})