import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';

Swiper.use([Navigation, Autoplay, Pagination]);

export default class Slider {
    constructor(el) {
        this.el = el;
        this.$el = $(this.el);
        this.params = {};
    }

    init() {
        this.swiper = new Swiper(this.el, this.params);
    }
}