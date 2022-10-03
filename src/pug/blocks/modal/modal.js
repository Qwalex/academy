import { Fancybox } from '@fancyapps/ui';

export default class Modal {
    constructor(el) {
        this.el = el;
        this.$el = $(this.el);
    }
}