//Задание №2
const startTimer = setInterval(function () {
  let arrTimer = arrFunc();
  let arrClock = arrTimer.arrClock;
  let second = parseFloat(arrClock[2]);
  let minute = parseFloat(arrClock[1]);
  let hour = parseFloat(arrClock[0]);
  let seconds = second % 60;
  let minutes = Math.floor((minute / 60) % 60);
  let hours = Math.floor((hour / 3600) % 24);
  if (seconds != 0) {
    seconds--;
  }
  if (minutes != 0) {
    minutes--;
  }
  if (hours != 0) {
    hours--;
  }
  if (hours <= 0 && minutes <= 0 && seconds <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(startTimer);
  }
  let outString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  clock = outString;
  timer.textContent = outString;
}, 1000);

let clock = timer.textContent;
const arrFunc = function () {
  let arr = [clock, "0", "0"];
  let second = parseFloat(arr[0]);
  if (isNaN(second) == NaN || second === 0) {
    let arr = [clock];
    let arrClock = arr[0].split(":");
    return { arrClock: arrClock };
  } else {
    arr = ["0", "0", clock];
    return { arrClock: arr };
  }
};
//Задание №1
// const clock = document.getElementById("timer");

// const startTimer = setInterval(function () {
//   let numberTimer = parseFloat(clock.textContent);
//   clock.textContent = numberTimer - 1;
//   if (numberTimer <= 0) {
//     alert("Вы победили в конкурсе!");
//     clearInterval(startTimer);
//   }
// }, 1000);
