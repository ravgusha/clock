let dayEl = document.querySelector('.day');
let timeEl = document.querySelector('.time');
let weekdayEl = document.querySelector('.weekday');

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getTime() {
    let time = new Date();

    let date = time.getDate();
    let month = time.getMonth()
    let year = time.getFullYear();
 
    if (date < 10) {
        date= '0' + date;
    }

    if (month < 10) {
        month ='0'+ month;
    }


    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
        hours ='0'+ hours;
    }

    if (minutes < 10) {
        minutes ='0'+ minutes;
    }

    if (seconds < 10) {
        seconds ='0'+ seconds;
    }

    let weekday = weekdays[time.getDay()];

    dayEl.innerHTML = `${date}/${month}/${year}`;
    timeEl.innerHTML = `${hours}:${minutes}:${seconds}`;
    weekdayEl.innerHTML = `${weekday}`;
}

getTime();
setInterval(getTime, 1000);