import Slider from '../slider/slider'

export default class ReviewsSlider extends Slider {
    constructor(el) {
        const element = document.querySelector(el);
        if (!element) {
            return;
        }
        super(el);
        const inTextArea = this.$el.closest('.text-area').length > 0;
        this.params = {
            spaceBetween: 16,
            slidesPerView: 3,
            navigation: {
                prevEl: '.js-reviews-slider-prev',
                nextEl: '.js-reviews-slider-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: true,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: inTextArea ? 2 : 3,
                    spaceBetween: 16,
                },
                1369: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                }
            },
        }
        this.init();
    }
}