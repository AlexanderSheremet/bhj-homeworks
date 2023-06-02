const rotatorCase = [...document.querySelectorAll(".rotator__case")];
const rotatorCaseActive = document.querySelector(".rotator__case_active");

let number = 0;
function parametr() {
  rotatorCase[number].classList.remove("rotator__case_active");
  if (number === rotatorCase.length - 1) {
    number = 0;
  } else {
    number++;
  }
  rotatorCase[number].classList.add("rotator__case_active");
  rotatorCase[number].style.color = rotatorCase[number].dataset.color;

  let speed = rotatorCase[number].dataset.speed;
  setTimeout(parametr, speed);
}
setTimeout(parametr, 1000);
