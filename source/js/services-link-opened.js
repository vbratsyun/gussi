const servicesBlocks = document.querySelectorAll(".services__block");

const onServicesBlockClick = (event) => {
  event.preventDefault();
  if (event.target.matches(".services__link")) {
    event.target.classList.toggle("services__link--opened");
    event.target.nextElementSibling.classList.toggle(
      "services__container--opened"
    );
  }
};

servicesBlocks.forEach((servicesBlock) =>
  servicesBlock.addEventListener("click", onServicesBlockClick)
);
