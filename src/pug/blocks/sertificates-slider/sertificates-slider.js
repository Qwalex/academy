import Slider from '../slider/slider'

export default class sertificatesSlider extends Slider {
    constructor(el) {
        super(el);
        this.itemsCount = this.$el.data('items-count') || 5;
        this.params = {
            spaceBetween: 16,
            slidesPerView: this.itemsCount,
            navigation: {
                prevEl: '.js-sertificates-slider-prev',
                nextEl: '.js-sertificates-slider-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    loop: true,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: this.itemsCount,
                    spaceBetween: 16,
                }
            },
        }
        this.init();
    }
}