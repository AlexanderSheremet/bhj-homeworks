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
const clickerStatus = document.querySelector(".clicker__status");
clickerStatus.innerHTML += '<br>Скорость клика: <span id="click__speed">0</span>';

const speedometer = document.getElementById('click__speed');
const clicker = document.getElementById("clicker__counter");
let clickCount = 0;
let lastClickTime = null;

cookie.onclick = function() {
    const currentTime = new Date();
    clickCount++;
    clicker.innerHTML = clickCount;

    if (clickCount % 2) {
        cookie.width = "300";
    } else {
        cookie.width = "200";
    }

    if (lastClickTime) {
        const timeDif = (currentTime - lastClickTime) / 1000;
        const clickSpeed = 1 / timeDif;
        speedometer.innerHTML = clickSpeed.toFixed(2);
    }
    
    lastClickTime = currentTime;
}
