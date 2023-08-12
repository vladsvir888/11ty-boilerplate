const mobileFilter = () => {
  const filterButton = document.querySelector('.page-top__filter-btn');
  const filter = document.querySelector('.catalog-filter');
  const closeButton = document.querySelector('.catalog-filter__close');

  filterButton?.addEventListener('click', () => {
    filter.classList.add('active');
    document.body.classList.add('lock');
  });

  closeButton?.addEventListener('click', () => {
    filter.classList.remove('active');
    document.body.classList.remove('lock');
  });
};

export default mobileFilter;
