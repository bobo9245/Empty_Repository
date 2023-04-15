let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const prevMonth = () => {
    if (month === 0) {
        year--;
        month = 11;
    } else {
        month--;
    }
    renderCalendar();
}

const nextMonth = () => {
    if (month === 11) {
        year++;
        month = 0;
    } else {
        month++;
    }
    renderCalendar();
}

const renderCalendar = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysElement = document.getElementById("days");
    const monthElement = document.getElementById("month");
    monthElement.innerText = `${monthNames[month]} ${year}`;

    let days = "";

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
        days += "<div></div>";
    }

    for (let i =
