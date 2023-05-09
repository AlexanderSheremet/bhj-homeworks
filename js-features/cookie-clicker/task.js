// Задание №1
// let clickerCounter = document.getElementById("clicker__counter");
// let clickerCookie = document.getElementById("cookie");

// clickerCookie.onclick = function () {
//   let counter = parseFloat(clickerCounter.textContent);
//   clickerCounter.textContent = counter + 1;
//   if (counter % 2 === 0) {
//     clickerCookie.width = 300;
//   } else {
//     clickerCookie.width = 200;
//   }
// };
//Задание №2
let clickerCounter = document.getElementById("clicker__counter");
let clickerCookie = document.getElementById("cookie");

clicker__counter.insertAdjacentHTML(
  "afterEnd",
  "<div class='clicker__status'>Скорость кликов:<span id='clicker__Speed'>0</span></div>"
);
const clikerSpeed = document.getElementById("clicker__Speed");
const time = Date.now();
clickerCookie.onclick = function () {
  let counter = parseFloat(clickerCounter.textContent);
  clickerCounter.textContent = counter + 1;
  if (clickerCookie.width === 200) {
    clickerCookie.width = 300;
  } else {
    clickerCookie.width = 200;
  }
  const timePast = Date.now();
  clicker__Speed.textContent = (counter / ((timePast - time) / 1000)).toFixed(
    2
  );
};
