const toggleCatalog = () => {
  const btns = document.querySelectorAll('.page-top__view-toggler');

  if (!btns.length);

  const catalog = document.querySelector('.catalog');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!catalog.classList.contains('catalog--list')) {
        catalog.classList.add('catalog--list');
        btns[0].removeAttribute('disabled');
        btns[1].setAttribute('disabled', true);
      } else {
        catalog.classList.remove('catalog--list');
        btns[0].setAttribute('disabled', true);
        btns[1].removeAttribute('disabled');
      }
    });
  });
};

export default toggleCatalog;
