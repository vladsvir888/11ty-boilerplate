const showMore = () => {
  document.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.classList.contains('catalog-filter__show-more')) return;

    const bodyEl = target.previousElementSibling;

    const hiddenEls = bodyEl.querySelectorAll('.form-check[hidden]');

    hiddenEls.forEach((hiddenEl) => {
      hiddenEl.removeAttribute('hidden');
    });

    target.remove();
  });
};

export default showMore;
