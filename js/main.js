// Imports
import MobileMenu from './modules/mobile-menu';
import Animation from './modules/animation';

// Mobile Menu

const menuMobile = new MobileMenu('.header__menu', '.header__menu--mobile');
menuMobile.init();

// Animation

const animation = new Animation();
animation.init();
