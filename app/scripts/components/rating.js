const rating = () => {
  document.addEventListener('sl-change', (e) => {
    const { target } = e;

    if (target.tagName.toLowerCase() !== 'sl-rating') return;

    if (target.value < 1) target.value = 1;

    const input = target.nextElementSibling;

    input.value = target.value;
  });
};

export default rating;
