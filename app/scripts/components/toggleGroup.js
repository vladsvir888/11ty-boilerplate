const toggleGroup = () => {
  const group = document.querySelector('.js-toggle-group-block');

  if (!group) return;

  const btns = [...group.querySelectorAll('.js-toggle-group-block__btn')];
  const contents = group.querySelectorAll('.js-toggle-group-block__content');

  function toggle(oldEl, newEl) {
    oldEl.setAttribute('aria-pressed', false);
    newEl.setAttribute('aria-pressed', true);

    contents[btns.indexOf(oldEl)].hidden = true;
    contents[btns.indexOf(newEl)].hidden = false;
  }

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const activeBtn = group.querySelector('.js-toggle-group-block__btn[aria-pressed="true"]');

      toggle(activeBtn, e.target);
    });
  });
};

export default toggleGroup;
