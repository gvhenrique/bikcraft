import OutsideClick from './helper/outside-click';

export default class MobileMenu {
  constructor(menu, menuButton) {
    this.menu = document.querySelector(menu);
    this.menuButton = document.querySelector(menuButton);
    this.userEvents = ['click', 'touch'];
    this.openMenu = this.openMenu.bind(this);
  }

  toggleAriaAttribute() {
    if (this.menuButton.getAttribute('aria-expanded') === 'true') {
      this.menuButton.setAttribute('aria-expanded', 'false');
    } else {
      this.menuButton.setAttribute('aria-expanded', 'true');
    }
  }

  toggleActiveClass() {
    if (this.menu.classList.contains('active')) {
      this.menu.classList.remove('active');
    } else {
      this.menu.classList.add('active');
    }
  }

  openMenu(event) {
    event.preventDefault();
    this.toggleAriaAttribute();
    this.toggleActiveClass();
    const outsideClick = new OutsideClick('.header', '.header__menu');
    outsideClick.init();
  }

  addMenuEvent() {
    this.userEvents.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    if (this.menu && this.menuButton) {
      this.addMenuEvent();
    }
  }
}
