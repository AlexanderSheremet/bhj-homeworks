const productAdd = [...document.querySelectorAll(".product__add")];
const productQuantity = [
  ...document.querySelectorAll(".product__quantity-controls"),
];

productAdd.forEach((btn) => {
  btn.addEventListener("click", addToCart);
});

productQuantity.forEach((control) => {
  control.addEventListener("click", newQuantity);
});

function creatCart(id, imageSrc, count) {
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("cart__product");
  cartProduct.dataset.id = id;
  const cartImage = document.createElement("img");
  cartImage.classList.add("cart__product-image");
  cartImage.src = imageSrc;
  const cartCount = document.createElement("div");
  cartCount.classList.add("cart__product-count");
  cartCount.textContent = count;

  cartProduct.appendChild(cartImage);
  cartProduct.appendChild(cartCount);

  return cartProduct;
}

function newQuantity(event) {
  const quantityControl = event.target;
  const product = quantityControl.closest(".product");
  const quantityValue = product.querySelector(".product__quantity-value");
  let quantity = +quantityValue.textContent;
  if (quantityControl.classList.contains("product__quantity-control_dec")) {
    quantity = Math.max(quantity - 1, 1);
  } else if (
    quantityControl.classList.contains("product__quantity-control_inc")
  ) {
    quantity++;
  }
  quantityValue.textContent = quantity;
}

function addToCart(elem) {
  const product = elem.target.closest(".product");
  const productId = product.dataset.id;
  const productImageSrc = product.querySelector(".product__image").src;
  const productQuantity = +product.querySelector(".product__quantity-value")
    .textContent;
  const cartProduct = document.querySelector(
    `.cart__product[data-id="${productId}"]`
  );
  if (cartProduct) {
    const cartProductCount = +cartProduct.querySelector(".cart__product-count")
      .textContent;
    const newCount = cartProductCount + productQuantity;
    cartProduct.querySelector(".cart__product-count").textContent = newCount;
  } else {
    const cartProductElem = creatCart(
      productId,
      productImageSrc,
      productQuantity
    );
    document.querySelector(".cart__products").appendChild(cartProductElem);
  }
}
