const left = document.getElementById('one');
const up = document.getElementById('two');
const down=document.getElementById('three');
const right=document.getElementById('four');
const circle = document.getElementById('circle');

console.log(circle.style);

left.addEventListener('click',()=>{
	circle.classList.add('left')
})