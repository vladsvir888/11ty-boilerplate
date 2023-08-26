import getScrollbarWidth from './helpers/getScrollbarWidth';

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
});
