const drawer = () => {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('js-drawer-btn')) return;

    document.querySelector('.js-drawer')?.show();
  });

  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('js-drawer-close')) return;

    document.querySelector('.js-drawer')?.hide();
  });
};

export default drawer;
