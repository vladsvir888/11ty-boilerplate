const portalBurgerMenu = () => {
  const btn = document.querySelector('.sidebar__burger');
  const drawer = document.querySelector('.portal-burger-menu');

  btn?.addEventListener('click', () => {
    if (!btn.classList.contains('active')) {
      drawer.show();
      btn.classList.add('active');
    } else {
      drawer.hide();
      btn.classList.remove('active');
    }
  });

  drawer?.addEventListener('sl-request-close', () => {
    btn.classList.remove('active');
  });
};

export default portalBurgerMenu;
