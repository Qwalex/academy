export default class InnerNav {
    constructor(el) {
        this.el = el;
        this.$el = $(this.el);
        this.$header = this.$el.find('.js-inner-nav-header');
        this.$document = $(document);
        this.classes = {
            navActive: 'inner-nav--active',
        }
        this.setListeners();
    }

    setListeners() {
        this.$header.on('click', () => this.toggleNav());
        this.$document.on('click', (e) => this.checkOutside(e))
    }

    toggleNav(state) {
        if (state !== undefined) {
            this.$el.toggleClass(this.classes.navActive, state);
            return;
        }
        this.$el.toggleClass(this.classes.navActive);
    }

    checkOutside(e) {
        const $target = $(e.target);
        const isInnerNav = $target.is(this.$el) || $target.closest(this.$el).length > 0;

        if (!isInnerNav) {
            this.toggleNav(false);
        }
    }
}