const submenu = () => {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('burger-menu__toggle')) {
      const drawer = target.nextElementSibling;
      drawer.classList.add('open');
    }

    if (target.classList.contains('submenu__prev-button')) {
      const drawer = target.closest('.submenu');
      drawer.classList.remove('open');
    }
  });
};

export default submenu;
