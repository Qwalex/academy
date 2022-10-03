import Slider from '../../blocks/slider/slider'

export default class ServiceSlider extends Slider {
    constructor(el) {
        super(el);
        this.params = {
            slidesPerView: 5,
            spaceBetween: 16,
            navigation: {
                prevEl: '.js-service-slider-prev',
                nextEl: '.js-service-slider-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                },
            }
        }
        this.init();
    }
}