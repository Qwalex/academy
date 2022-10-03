import Slider from '../../blocks/slider/slider'

export default class AboutSlider extends Slider {
    constructor(el) {
        super(el);
        this.params = {
            loop: true,
            navigation: {
                prevEl: '.js-about-slider-prev',
                nextEl: '.js-about-slider-next',
            },
        }
        this.init();
    }
}