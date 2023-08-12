/* eslint-disable import/extensions */
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import productsSlider from './components/productsSlider';
import quantity from './components/quantity';
import dialog from './components/dialog';
import productCardSlider from './components/productCardSlider';
import heroBannerSlider from './components/heroBannerSlider';
import { searchBox, searchBoxClose } from './components/searchBox';
import showMore from './components/showMore';
import counter from './components/counter';
import rangeSlider from './components/rangeSlider';
import toggleCatalog from './components/toggleCatalog';
import setMaskForPhone from './components/setMaskForPhone';
import formValidation from './components/formValidation';
import favorite from './components/favorite';
import selectIcon from './components/selectIcon';
import toggleGroup from './components/toggleGroup';
import mapWithBalloon from './components/mapWithBalloon';
import mapWithPlacemark from './components/mapWithPlacemark';
import rating from './components/rating';
import newsSlider from './components/newsSlider';
import photoGallery from './components/photoGallery';
import scrollToSection from './components/scrollToSection';
import drawer from './components/drawer';
import togglePassword from './components/togglePassword';
import toggleCardBlock from './components/toggleCardBlock';
import burgerMenu from './components/burgerMenu';
import mobileFilter from './components/mobileFilter';
import categoryProductsSlider from './components/categoryProductsSlider';
import submenu from './components/submenu';
import confirmDialog from './components/confirmDialog';
import categoryProductsSliderPortal from './components/categoryProductsSliderPortal';
import remindersSlider from './components/remindersSlider';
import toggleBasketBtn from './components/toggleBasketBtn';
import portalBurgerMenu from './components/portalBurgerMenu';
import getScrollbarWidth from './helpers/getScrollbarWidth';
import toggleBasketBlock from './components/toggleBasketBlock';

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

  confirmDialog();
  productsSlider();
  categoryProductsSlider();
  quantity();
  dialog();
  productCardSlider();
  heroBannerSlider();
  searchBox();
  searchBoxClose();
  showMore();
  counter();
  rangeSlider();
  toggleCatalog();
  setMaskForPhone();
  formValidation();
  favorite();
  selectIcon();
  toggleGroup();
  mapWithBalloon();
  mapWithPlacemark();
  rating();
  newsSlider();
  photoGallery();
  scrollToSection();
  drawer();
  togglePassword();
  toggleCardBlock();
  burgerMenu();
  mobileFilter();
  submenu();
  categoryProductsSliderPortal();
  remindersSlider();
  toggleBasketBtn();
  portalBurgerMenu();
  toggleBasketBlock();

  document.addEventListener('store-update', () => mapWithBalloon());
  document.addEventListener('products-slider-reinit', () => productsSlider());
});
