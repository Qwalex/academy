export default class Spoiler {
    constructor(el) {
        this.el = el;
        this.$el = $(this.el);
        this.$header = this.$el.find('.js-spoiler-header');
        this.$body = this.$el.find('.js-spoiler-body');

        this.setListeners();
        if (this.$el.is('.spoiler--open')) {
            this.$body.slideToggle(true);
        }
    }

    setListeners() {
        this.$header.on('click', () => {
            this.toggleSpoiler();
        });
    }

    toggleSpoiler() {
        this.$el.toggleClass('spoiler--open');
         this.$body.slideToggle();
    }
}