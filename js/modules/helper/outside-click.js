export default class OutsideClick {
  constructor(element, activeElement) {
    this.element = document.querySelector(element);
    this.stateElement = document.querySelector(activeElement);
    this.html = document.querySelector('html');
    this.userEvents = ['click', 'touch'];
    this.checkClick = this.checkClick.bind(this);
  }

  checkClick(event) {
    if (!this.element.contains(event.target)) {
      this.stateElement.classList.remove('active');
      this.userEvents.forEach((userEvent) => {
        this.html.removeEventListener(userEvent, this.checkClick);
      });
    }
  }

  addHtmlEvent() {
    this.userEvents.forEach((userEvent) => {
      this.html.addEventListener(userEvent, this.checkClick);
    });
  }

  init() {
    if (this.element && this.stateElement) {
      this.addHtmlEvent();
    }
    return this;
  }
}
