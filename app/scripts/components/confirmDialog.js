const KEY_LS = 'age_confirm_vintegra';

const checkValueInLS = () => localStorage.getItem(KEY_LS);

const confirmDialog = () => {
  const value = checkValueInLS();

  const confirmDialogEl = document.getElementById('age-confirm');

  if (!value) confirmDialogEl?.show();

  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('age-confirm__btn--confirm')) return;

    localStorage.setItem(KEY_LS, true);

    confirmDialogEl?.hide();
  });

  document.addEventListener('sl-request-close', (event) => {
    if (event.detail.source === 'overlay' && event.target.classList.contains('dialog--age-confirm')) {
      event.preventDefault();
    }
  });
};

export default confirmDialog;
