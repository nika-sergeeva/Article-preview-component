
const btn = document.getElementById('button');
const arrow = document.getElementById('arr');
const popper = document.querySelector('.popover-body');

btn.addEventListener('click', ()=> {
  btn.classList.toggle('active');
  arrow.classList.toggle('active');
  popper.classList.toggle('active');
})

