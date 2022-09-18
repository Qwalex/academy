export default class Header {
  constructor() {
    this.$header = $('.js-header');
    this.$window = $(window);
    this.lastScrollTop = 0;
    this.classes = {
      header: {
        hidden: 'main-header--hidden',
      }
    }

    this.setListeners();
  }

  setListeners() {
    this.$window.on('scroll', () => this.scroll());
  }

  scroll() {
    console.log('scroll')
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop && st > this.$header.outerHeight()){
      this.$header.addClass(this.classes.header.hidden);
    } else {
      this.$header.removeClass(this.classes.header.hidden);
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}