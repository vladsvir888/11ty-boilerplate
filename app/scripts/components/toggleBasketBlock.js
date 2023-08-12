const toggleBasketBlock = () => {
  const btn = document.querySelector('.page-top__toggle');
  const pageTopBlock = document.querySelector('.page-top');

  btn?.addEventListener('click', () => {
    if (!pageTopBlock.classList.contains('basket-block-show')) {
      pageTopBlock.classList.add('basket-block-show');
    } else {
      pageTopBlock.classList.remove('basket-block-show');
    }
  });
};

export default toggleBasketBlock;
