const scrollToSection = () => {
  document.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.classList.contains('detail-news__list-link')) return;

    e.preventDefault();

    const block = document.getElementById(target.dataset.href);

    if (!block) return;

    window.scrollTo({
      top: window.scrollY + block.getBoundingClientRect().top - document.querySelector('.header').offsetHeight,
    });
  });
};

export default scrollToSection;
