"use strict";

/** Javascript - Delay one command or run a command at a specified interval **/
setInterval("runClock()", 1000);

/** Javascript - Create and call a JavaScript function that keeps track of the current day and time **/
function runClock() {
  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();

  document.getElementById("dateNow").innerHTML = dateStr + " " + timeStr;
}

/** Javascript - Include a countdown function **/
(function countdown() {
  const timeAmount = 2 * 60 * 1000;
  const endTime = Date.now() + timeAmount;

  const timer = setInterval(() => {
    const remainder = endTime - Date.now();

    if (remainder <= 0) {
      clearInterval(timer);
      location.reload();
      return;
    }
  
/** Javascript - Use a Math method **/
    const minutes = Math.floor(remainder/60000);
    const seconds = Math.floor((remainder % 60000) / 1000);
    const milliseconds = Math.floor((remainder % 60000) % 1000);

/** Javascript - Convert between a number and a string **/
    const minString = "0" + minutes;
    const secString = seconds < 10 ? "0" + seconds : seconds;
    const milliString = milliseconds < 100 ? "0" + milliseconds : milliseconds;

    document.getElementById("mins").textContent = `${minString}`;
    document.getElementById("secs").textContent = `${secString}`;
    document.getElementById("ms").textContent = `${milliString}`;
  }, 10);
})();


/** Web Forms - Validate data with patterns and field lengths **/

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = document.getElementById("email").value;
if (emailRegex.test(email)) {
/** Javascript - Send an alert using JavaScript **/
  alert("Valid email address");
} else {
  alert("Invalid email address");
}

const phoneRegex = /^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$/;
const phone = document.getElementById("phone").value;
if (phoneRegex.test(phone)) {
  alert("Valid phone number");
} else {
  alert("Invalid phone number");
}
