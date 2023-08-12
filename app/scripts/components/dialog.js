const dialog = () => {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.dataset.dialog) return;

    event.preventDefault();

    const dialogElement = document.getElementById(target.dataset.dialog);

    if (!dialogElement) return;

    dialogElement.show();

    const openedDialogElement = document.querySelector('sl-dialog[open]');

    if (openedDialogElement) {
      openedDialogElement.hide();
    }
  });

  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('dialog__close')) return;

    event.preventDefault();

    const dialogElement = target.closest('sl-dialog');

    if (!dialogElement) return;

    dialogElement.hide();
  });
};

export default dialog;
