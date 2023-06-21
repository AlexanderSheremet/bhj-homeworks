const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  " https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  const loader = document.querySelector(".loader");
  loader.classList.remove("loader_active");
  const itemsMain = document.getElementById("items");

  let items = xhr.response.response.Valute;
  for (let i = 0; i < Object.keys(items).length; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    itemsMain.appendChild(item);
    const itemCharCode = items[Object.keys(items)[i]];
    const itemCode = document.createElement("div");
    itemCode.classList.add("item__code");
    itemCode.append(`${itemCharCode.CharCode}`);
    item.appendChild(itemCode);

    const itemValue = document.createElement("div");
    itemValue.classList.add("item__value");
    itemValue.append(`${itemCharCode.Value}`);
    item.appendChild(itemValue);

    const itemCurrency = document.createElement("div");
    itemCurrency.classList.add("item__currency");
    itemCurrency.append("руб.");
    item.appendChild(itemCurrency);
  }
};
