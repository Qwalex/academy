export default class Tabs {
    constructor(el) {
        this.el = el;
        this.$el = $(this.el);
        this.$headerItems = this.$el.find('.js-tabs-header-item');
        this.$bodyItems = this.$el.find('.js-tabs-body-item');
        this.headerActiveClass = this.$el.data('header-active');
        this.classes = {
            bodyActive: 'tabs__body-item--active',
            headerActive: 'tabs__body-item--active',
        }

        if (this.headerActiveClass) {
            this.classes.headerActive = this.headerActiveClass;
        }


        this.setListeners();
    }

    setListeners() {
        this.$headerItems.on('click', (el) => {
            this.clickItem($(el.currentTarget).index())
        });
    }

    clickItem(index) {
        this.$headerItems.removeClass(this.classes.headerActive).eq(index).addClass(this.classes.headerActive);
        this.$bodyItems.removeClass(this.classes.bodyActive).eq(index).addClass(this.classes.bodyActive);
    }
}