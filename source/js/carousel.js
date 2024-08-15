const buttonBack = document.querySelector(".controls__button-prev");
const buttonForward = document.querySelector(
  ".controls__button-forward"
);
const productInfoList = document.querySelector(".product-info__list");


buttonForward.addEventListener("click", () => {
  productInfoList.append(productInfoList.children[0]);
});

buttonBack.addEventListener("click", () => {
  productInfoList.prepend(
    productInfoList.children[productInfoList.children.length - 1]
  );
});
