const buttonRemove = document.querySelector(".quantity__button--remove");
const buttonAdd = document.querySelector(".quantity__button--add");
const quantityInput = document.querySelector(".quantity__text");
const costDozens = document.querySelector(".cost__text-dozens");
const costText = document.querySelector(".cost__text");
const totalAmount = document.querySelector(".cost__total-amount");

const onButtonRemoveClick = () => {
  if (quantityInput.value >= 2) {
    quantityInput.value--;
    costDozens.textContent = quantityInput.value*120;
    totalAmount.value = costText.textContent;
  } else {
    quantityInput.disabled = true;
  }
};

const onButtonAddClick = () => {
  quantityInput.value++;
  costDozens.textContent = quantityInput.value*120;
  totalAmount.value = costText.textContent;
};

buttonRemove.addEventListener("click", onButtonRemoveClick);
buttonAdd.addEventListener("click", onButtonAddClick);
.addEventListener('load', () => {
    costDozens.textContent = quantityInput.value*120;
})