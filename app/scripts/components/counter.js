const counter = () => {
  document.addEventListener('change', (e) => {
    const { target } = e;

    const parent = target.closest('.catalog-filter__item');

    if (!parent) return;

    const counterEl = parent.querySelector('.catalog-filter__counter');

    if (!counterEl) return;

    if (target.checked) {
      counterEl.textContent = Number(counterEl.textContent) + 1;
    } else {
      counterEl.textContent = Number(counterEl.textContent) - 1;
    }

    if (Number(counterEl.textContent)) {
      counterEl.classList.add('show');
    } else {
      counterEl.classList.remove('show');
    }
  });
};

export default counter;
