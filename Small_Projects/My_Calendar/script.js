window.onload = function(){buildCalendar();}

let curMonth = new Date();
let today = new Date();
today.setHours(0,0,0,0);

function buildCalendar(){
	let firstDate = new Date(curMonth.getFullYear(),curMonth.getMonth(),1);
	let lastDate = new Date(curMonth.getFullYear(),curMonth.getMonth()+1,0);
	
	let tbody_Calendar = document.querySelector(".calendar > tbody");
}
/*https://sirius7.tistory.com/35