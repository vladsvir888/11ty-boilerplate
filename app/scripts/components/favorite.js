const favorite = () => {
  document.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.classList.contains('btn--favorite')) return;

    e.preventDefault();

    target.classList.toggle('fill');
  });
};

export default favorite;
