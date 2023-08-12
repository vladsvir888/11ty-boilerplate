const toggleCardBlock = () => {
  document.addEventListener('change', (event) => {
    const { target } = event;

    if (!target.classList.contains('js-check')) return;

    const hiddenBlock = document.getElementById(target.dataset.hiddenBlock);

    hiddenBlock.hidden = !hiddenBlock.hidden;
  });
};

export default toggleCardBlock;
