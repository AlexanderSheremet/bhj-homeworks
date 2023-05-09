//Задание №2
const clock = document.getElementById("timer");

const startTimer = setInterval(function () {
  let time = stringTime;
  if (time.numberTimer <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(startTimer);
  }
  let outString = `${time.hours}:${time.minutes}:${time.seconds}`;
  timer.textContent = outString;
}, 1000);

const stringTime = function () {
  let numberTimer = parseFloat(clock.textContent);
  clock.textContent = numberTimer - 1;
  let seconds = numberTimer % 60;
  let minutes = Math.floor((numberTimer / 60) % 60);
  let hours = Math.floor((numberTimer / 3600) % 24);
  return {
    numberTimer: numberTimer,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
  };
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
