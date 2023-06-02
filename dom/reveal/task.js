const reveal = [...document.querySelectorAll(".reveal")];

window.addEventListener("scroll", function () {
  reveal.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    const bottom = element.getBoundingClientRect().bottom;
    if (bottom > 0 && top < this.window.innerHeight) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
});
