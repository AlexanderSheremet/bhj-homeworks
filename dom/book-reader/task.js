const fontSizeSmall = document.querySelector(".font-size_small");
const fontSizeActive = document.querySelector(".font-size_active");
const fontSizeBig = document.querySelector(".font-size_big");
const bookControl = document.querySelector(".book__content");
const fontSize = [...document.querySelectorAll(".font-size")];

fontSize.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    fontSize.forEach((element) => {
      element.classList.remove("font-size_active");
    });
    element.classList.add("font-size_active");
    if (element === fontSizeSmall) {
      bookControl.classList.add("book_fs-small");
    } else if (element === fontSizeBig) {
      bookControl.classList.remove("book_fs-small");
      bookControl.classList.add("book_fs-big");
    } else {
      bookControl.classList.remove("book_fs-small");
      bookControl.classList.remove("book_fs-big");
    }
  });
});
