import Slider from '../../blocks/slider/slider'

export default class SpecSlider extends Slider {
    constructor(el) {
        const element = document.querySelector(el);
        if (!element) {
            return;
        }
        super(el);
        this.params = {
            spaceBetween: 16,
            slidesPerView: 3,
            navigation: {
                prevEl: '.js-spec-slider-prev',
                nextEl: '.js-spec-slider-next',
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
                    slidesPerView: 3,
                    spaceBetween: 16,
                }
            },
        }
        this.init();
    }
}