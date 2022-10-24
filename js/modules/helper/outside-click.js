export default class OutsideClick {
  constructor(target, targetButton) {
    this.html = document.querySelector('html');
    this.target = document.querySelector(target);
    this.targetButton = document.querySelector(targetButton);
    this.userEvents = ['click', 'touch'];
    this.checkClick = this.checkClick.bind(this);
  }

  checkClick(event) {
    if ((event.target !== this.targetButton) && (!this.target.contains(event.target))) {
      this.target.classList.remove('active');
      this.userEvents.forEach((userEvent) => {
        this.html.removeEventListener(userEvent, this.checkClick);
      });
    }
  }

  addHtmlEvent() {
    this.userEvents.forEach((userEvent) => this.html.addEventListener(userEvent, this.checkClick));
  }

  init() {
    if (this.target) {
      this.addHtmlEvent();
    }
  }
}
