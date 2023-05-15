const toggle = document.querySelector('.toggle');
const ul = document.querySelector('ul');

function myFunction() {
  ul.classList.toggle('active');
}

toggle.addEventListener('click', myFunction);
