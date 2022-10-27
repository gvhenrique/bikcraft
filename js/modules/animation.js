export default class Animation {
  constructor() {
    this.elements = Array.from(document.querySelectorAll('[data-animate]'));
  }

  elementAnimate() {
    this.elements.forEach((element) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, +element.dataset.animate);
    });
  }

  init() {
    if (this.elements.length) {
      this.elementAnimate();
    }
  }
}
