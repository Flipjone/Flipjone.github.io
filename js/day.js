let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let months = [
    "January",

    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let today = new Date();
let dayName = days[today.getDay()];
let monthName = months[today.getMonth()];
let year = today.getFullYear();

let completeDate = dayName + ", " + monthName + " " + today.getDate() + ", " + year;


document.getElementById("currentDay").textContent = completeDate;
document.getElementById("currentYear").textContent = year;