const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = [...document.querySelectorAll(".dropdown__item")];
const dropdownLink = [...document.querySelectorAll(".dropdown__link")];

dropdownValue.addEventListener("click", function () {
  dropdownList.classList.add("dropdown__list_active");
});

dropdownItem.forEach((element) => {
  element.addEventListener("click", function () {
    dropdownValue.textContent = element.textContent;
    dropdownList.classList.remove("dropdown__list_active");
    event.preventDefault();
  });
});
