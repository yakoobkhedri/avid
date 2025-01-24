
// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn3'));
let accordionItem = Array.from(document.querySelectorAll('.accordionContent3 > div'));

accordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
accordionItem.forEach((item)=>{
  item.addEventListener('click', function () {
    item.parentElement.previousElementSibling.querySelector('p').textContent = item.textContent;
    item.parentElement.classList.remove('active');
    item.parentElement.previousElementSibling.classList.remove('active');
  })
})