const quantity = () => {
  document.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.classList.contains('quantity__btn')) return;

    const input = target.closest('.quantity ').querySelector('.quantity__input');

    if (target.classList.contains('quantity__btn--increase')) {
      input.stepUp();
    } else if (input.value > 1) {
      input.stepDown();
    }
  });
};

export default quantity;
