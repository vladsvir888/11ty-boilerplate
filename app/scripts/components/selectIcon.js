const selectIcon = () => {
  const selects = document.querySelectorAll('.select--icon');

  if (!selects.length) return;

  selects.forEach((select) => {
    const choiceIcon = select.querySelector('.select__choice-icon');
    const iconStr = select
      .querySelector(`.select__option[value="${select.value}"]`)
      .querySelector('.select__option-icon')
      .innerHTML;

    choiceIcon.insertAdjacentHTML('afterbegin', iconStr);

    select.addEventListener('sl-change', (e) => {
      const { target } = e;

      const iconStrAfterChange = select
        .querySelector(`.select__option[value="${target.value}"]`)
        .querySelector('.select__option-icon')
        .innerHTML;

      choiceIcon.innerHTML = '';

      choiceIcon.insertAdjacentHTML('afterbegin', iconStrAfterChange);
    });
  });
};

export default selectIcon;
