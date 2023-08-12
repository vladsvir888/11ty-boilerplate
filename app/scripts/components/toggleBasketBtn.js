const toggleBasketBtn = () => {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('js-basket-btn')) return;

    event.preventDefault();

    target.hidden = true;

    const parent = target.parentElement;
    const quantityWrapper = parent.querySelector('.quantity-wrapper');

    quantityWrapper.removeAttribute('hidden');
  });
};

export default toggleBasketBtn;
