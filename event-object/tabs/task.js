const tab = [...document.querySelectorAll(".tab")];
const tabContent = [...document.querySelectorAll(".tab__content")];
for (let i = 0; i < tab.length; i++) {
  function active() {
    const tabActive = document.querySelector(".tab_active");
    const tabContentActive = document.querySelector(".tab__content_active");
    if (tabActive != undefined) {
      tabActive.classList.remove("tab_active");
      tabContentActive.classList.remove("tab__content_active");
    }

    tab[i].classList.add("tab_active");
    tabContent[i].classList.add("tab__content_active");
  }
  tab[i].addEventListener("click", active);
}
