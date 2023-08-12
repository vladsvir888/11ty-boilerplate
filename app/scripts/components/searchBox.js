const searchBox = () => {
  const header = document.querySelector('.header');

  if (!header) return;

  const btn = header?.querySelector('.header__meta-btn--search');
  const search = header.querySelector('.js-search-box');
  const overlay = header.querySelector('.header__overlay');
  const close = search.querySelector('.search-box__close');
  const input = search.querySelector('.search-box__input');

  btn?.addEventListener('click', () => {
    header.classList.add('search-box-open');
  });

  close.addEventListener('click', () => {
    header.classList.remove('search-box-open');
    header.classList.remove('search-box-dropdown-show');
    document.body.classList.remove('lock');
    input.value = '';
  });

  overlay.addEventListener('click', () => {
    header.classList.remove('search-box-open');
    header.classList.remove('search-box-dropdown-show');
    document.body.classList.remove('lock');
    input.value = '';
  });

  input.addEventListener('input', () => {
    if (input.value !== '') {
      header.classList.add('search-box-dropdown-show');
      document.body.classList.add('lock');
    } else {
      header.classList.remove('search-box-dropdown-show');
      document.body.classList.remove('lock');
    }
  });
};

const searchBoxClose = () => {
  document.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.classList.contains('search-box__close') || target.closest('.search-box__form')) return;

    const input = target.parentElement.querySelector('.search-box__input');

    if (input.value) {
      input.value = '';
    }
  });
};

export { searchBox, searchBoxClose };
