const hasTooltip = [...document.querySelectorAll(".has-tooltip")];
const toolTip = document.querySelector(".tooltip");
const tip = document.createElement("div");
const tipDiv = document.body.appendChild(tip).classList.add("tooltip");

hasTooltip.forEach((element) => {
  element.addEventListener("click", (elem) => {
    elem.preventDefault();
    target = elem.target;
    if (target.title === tip.innerText) {
      tip.classList.toggle("tooltip_active");
      return;
    }
    tip.innerText = target.title;
    target.insertAdjacentElement("afterEnd", tip);
    tip.classList.add("tooltip_active");
  });
});
