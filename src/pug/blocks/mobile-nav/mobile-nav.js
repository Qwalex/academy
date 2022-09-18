export default class MobileNav {
  constructor() {
    this.$mobileNav = $('.js-mobile-nav');
    this.$mobileNavToggle = $('.js-mobile-nav-toggle');
    this.$document = $(document);
    this.$window = $(window);
    this.classes = {
      open: 'is-open',
    }
    this.isOpen = false;

    this.setListeners();
  }

  setListeners() {
    this.$mobileNavToggle.on('click', () => this.toggleMobileNav());
    this.$document.on('click', (e) => this.checkClickOutside(e));
    this.$window.on('resize', () => this.closeMobileNav());
  }

  openMobileNav() {
    if (this.isOpen) {
      return;
    }
    console.log('open')
    this.isOpen = true;
    this.$mobileNav.add(this.$mobileNavToggle).addClass(this.classes.open);
  }

  closeMobileNav() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.$mobileNav.add(this.$mobileNavToggle).removeClass(this.classes.open);
  }

  toggleMobileNav() {
    this.$mobileNav.add(this.$mobileNavToggle).toggleClass(this.classes.open);
    this.isOpen = this.$mobileNav.is('.is-open');
  }

  checkClickOutside(e) {
    const $target = $(e.target);
    const hasElement = (element) => {    
      const isElement = $target.is(element);
      const isElementChild = element.find($target).length > 0;
      return isElement || isElementChild;
    }

    const hasMobileNav = hasElement(this.$mobileNav);
    const hasMobileNavToggle = hasElement(this.$mobileNavToggle);

    if (hasMobileNav || hasMobileNavToggle) {
      return;
    }

    this.closeMobileNav();
  }
}