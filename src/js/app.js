import $ from 'jquery';
import _ from 'lodash';
import MainNav from '../pug/blocks/main-nav/main-nav';
import MobileNav from '../pug/blocks/mobile-nav/mobile-nav';
import Header from '../pug/blocks/header/header';
import Contacts from '../pug/blocks/contacts/contacts';
import HomeSlider from '../pug/blocks/home-slider/home-slider';
import SpecSlider from '../pug/blocks/spec-slider/spec-slider';
import Utils from './utils';

class App { 
	constructor() {
		this.mainNav = new MainNav();
		this.mobileNav = new MobileNav();
		this.header = new Header();
		this.contacts = new Contacts();
		this.homeSlider = new HomeSlider('.js-home-slider');
		this.specSlider = new SpecSlider('.js-spec-slider');
		this.utils = Utils;
	}
}

window.$ = $;
window._ = _;
window.app = new App();
