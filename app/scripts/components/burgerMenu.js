const burgerMenu = () => {
  const header = document.querySelector('.header');
  const burgerBtn = document.querySelector('.header__burger');
  const menu = document.querySelector('.burger-menu');

  burgerBtn?.addEventListener('click', () => {
    if (!header.classList.contains('burger-menu-open')) {
      menu.show();
      header.classList.add('burger-menu-open');
    } else {
      menu.hide();
      header.classList.remove('burger-menu-open');
    }
  });

  menu?.addEventListener('sl-hide', () => {
    menu.hide();
    header.classList.remove('burger-menu-open');

    document.querySelectorAll('.submenu').forEach((submenu) => submenu.classList.remove('open'));
  });
};

export default burgerMenu;
