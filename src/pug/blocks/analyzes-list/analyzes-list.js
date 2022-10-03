import analyzesItem from "../analyzes-item/analyzes-item";

export default class AnalyzesList {
    constructor(el) {
        this.el = el;
        this.$el = $(this.el);
        this.$allCheck = this.$el.find('.js-analyzes-list-all');
        this.$checkboxItems = this.$el.find('.js-analyzes-item-checkbox');
        this.$items = this.$el.find('.js-analyzes-item');

        this.initItems();
        this.setListeners();
    }

    initItems() {
        this.$items.each((key, el) => {
            new analyzesItem(el);
        });
    }

    checkAll() {
        if (this.$items.find('input:checkbox').filter(':checked').length === 0) {
            this.$allCheck.prop('checked', false);
        }
    }

    setListeners() {
        this.$allCheck.on('change', () => {
            this.$checkboxItems.prop('checked', this.$allCheck.prop('checked')).trigger('change');
        });
    }
}