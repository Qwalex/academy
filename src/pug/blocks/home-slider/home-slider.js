import Slider from '../../blocks/slider/slider';

export default class HomeSlider extends Slider {
    constructor(el) {
        const element = document.querySelector(el);
        if (!element) {
            return;
        }
        super(el);
        this.autoplay = $(this.el).data('autoplay') || 5000;
        this.params = {
            loop: true,
            autoplay: {
                delay: this.autoplay,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: '.js-home-slider-prev',
                nextEl: '.js-home-slider-next',
            },
            pagination: {
                el: '.js-home-slider-pagination',
                bulletClass: 'slider-area__dots-item',
                bulletActiveClass: 'slider-area__dots-item--active',
                clickable: true,
            },
            on: {
                init: () => {
                    this.startAutoPlayIndicator();
                },
            },
        };
        this.$autoPlayIndicator = $('.js-home-slider-autoplay');
        this.$textItems = $('.js-home-slider-text-item');
        this.classes = {
            textActive: 'slider-area__item--active',
        };
        this.init();
        this.setListeners();
    }

    setListeners() {
        this.swiper.on('slideChange', (swiper) => {
            this.slideChange(swiper);
        });
        this.swiper.on('transitionStart', () => {
            this.stopAutoPlayIndicator();
        });
        this.swiper.on('slideNextTransitionEnd', () => {
            this.startAutoPlayIndicator();
        });
        this.swiper.on('slidePrevTransitionEnd', () => {
            this.startAutoPlayIndicator();
        });
    }

    slideChange(swiper) {
        const $activeItem = this.$textItems.eq(swiper.realIndex);
        this.$textItems.not($activeItem).removeClass(this.classes.textActive);
        $activeItem.addClass(this.classes.textActive);
    }

    stopAutoPlayIndicator() {
        this.$autoPlayIndicator.stop(true, true).width(0);
    }

    startAutoPlayIndicator() {
        this.stopAutoPlayIndicator();
        this.$autoPlayIndicator.animate({
            width: '100%',
        }, this.autoplay, 'linear');
    }
}