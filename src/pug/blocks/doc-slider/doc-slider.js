import Slider from '../../blocks/slider/slider'
export default class DocSlider extends Slider {
    constructor(el) {
        super(el);
        this.params = {
            slidesPerView: 4,
            navigation: {
                prevEl: '.js-doc-slider-prev',
                nextEl: '.js-doc-slider-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                }

            }
        }
        this.init();
    }
}