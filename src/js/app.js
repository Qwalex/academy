import $ from 'jquery';
import _ from 'lodash';
import Vue from 'vue';
import MainNav from '../pug/blocks/main-nav/main-nav';
import MobileNav from '../pug/blocks/mobile-nav/mobile-nav';
import Header from '../pug/blocks/header/header';
import Contacts from '../pug/blocks/contacts/contacts';
import HomeSlider from '../pug/blocks/home-slider/home-slider';
import SpecSlider from '../pug/blocks/spec-slider/spec-slider';
import ReviewsSlider from '../pug/blocks/reviews-slider/reviews-slider';
import SertificatesSlider from '../pug/blocks/sertificates-slider/sertificates-slider';
import DocSlider from '../pug/blocks/doc-slider/doc-slider';
import ServiceSlider from '../pug/blocks/service-slider/service-slider';
import AboutSlider from '../pug/blocks/about-slider/about-slider'; 
import InnerNav from '../pug/blocks/inner-nav/inner-nav';
import Spoiler from '../pug/blocks/spoiler/spoiler';
import AnalyzesList from '../pug/blocks/analyzes-list/analyzes-list';
import Tabs from '../pug/blocks/tabs/tabs';
import Utils from './utils';
import { Fancybox } from '@fancyapps/ui';

Fancybox.bind('[data-fancybox="single"]', {
  groupAttr: false,
});

class App { 
	constructor() {
		console.log('app init')
		this.mainNav = new MainNav();
		this.mobileNav = new MobileNav();
		this.header = new Header();
		this.contacts = new Contacts();
		this.homeSlider = this.initOne('.js-home-slider', HomeSlider);
		this.specSlider = this.initOne('.js-spec-slider', SpecSlider);
		this.reviewsSlider = this.initOne('.js-reviews-slider', ReviewsSlider);
		this.sertificatesSlider = this.initOne('.js-sertificates-slider', SertificatesSlider);
		this.docSlider = this.initOne('.js-doc-slider', DocSlider);
		this.serviceSlider = this.initOne('.js-service-slider', ServiceSlider);
		this.aboutSlider = this.initOne('.js-about-slider', AboutSlider);
		this.innerNav = this.initOne('.js-inner-nav', InnerNav);
		this.analyzesList = this.initCollection('.js-analyzes-list', AnalyzesList);
		this.spoilers = this.initCollection('.js-spoiler', Spoiler);
		this.tabs = this.initCollection('.js-tabs', Tabs);
		this.cart = new Vue({
			el: '#app-cart',
			data() {
				return {
					items: [],
				};
			},

			watch: {
				items(val) {
					this.updateCount(val.length);
					this.updateCheck();
				}
			},

			methods: {
				updateCheck() {
					$('.js-analyzes-item input:checkbox').prop('checked', false);
					this.items.forEach((item) => {
						$('.js-analyzes-item').filter(`[data-id=${item.id}]`).find('input:checkbox').prop('checked', true);
					});

					window.app.analyzesList.forEach((item) => item.checkAll());
				},

				updateCount(count) {
					if (count === 0) {
						$('.js-cart-item-count').html('');
						return;
					}

					$('.js-cart-item-count').each((key, el) => {
						const $count = $(el);
						const pattern = $count.data('pattern');
						if (pattern) {
							$count.html(pattern.replace('count', count));
						} else {
							$count.html(count);
						}
					});
				},

				addItem(item) {
					this.items.push(item);
				},

				removeItem(id) {
					this.items = this.items.filter((item) => item.id !== id);
				}
			}
		})
		this.utils = Utils;

		this.setListeners();
	}

	setListeners() {
		$('.input').each((key, el) => {
			const $input = $(el).find('input');
			$input.on('focus', () => $(el).addClass('input--focus'));
			$input.on('blur', () => $(el).removeClass('input--focus'));
		});
	}

	initOne(selector, initiator) {
		console.log({
			selector,
			initiator,
		})
		const element = document.querySelector(selector);
		console.log(element)
		if (!element) {
			return null;
		}
		return new initiator(selector);
	}

	initCollection(selector, initiator) {
		return Array.prototype.slice.call(document.querySelectorAll(selector)).map((el) => new initiator(el));
	}
}

window.$ = $;
window._ = _;
window.Vue = Vue;

$(() => {
	window.app = new App();
})
