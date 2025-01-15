let cats = Array.from(document.querySelectorAll('.cats > div'));

cats.forEach((item)=>{
    item.addEventListener('click', function () {
        cats.forEach((items)=>{items.classList.remove('active')});
        item.classList.add('active');
    })
})