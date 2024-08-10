let Hours = document.querySelector(".Hours");
let Minutes = document.querySelector(".Minutes");
let Seconds = document.querySelector(".Seconds");
let ampmvalue = document.querySelector(".ampm");
let am = true;

function updatetime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let AMPM = "AM";

  if (hours >= 12) {
    if (hours > 12) hours -= 12;

    am = false;
  }
  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;
  seconds = seconds > 9 ? seconds : "0" + seconds;
  if (!am) {
    AMPM = "PM";
  }
  Hours.innerText = `${hours}`;
  Minutes.innerText = `${minutes}`;
  Seconds.innerText = `${seconds}`;
  ampmvalue.innerText = `${AMPM}`;
  setInterval(updatetime, 1000);
}

updatetime();
