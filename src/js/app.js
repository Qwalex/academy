import $ from 'jquery';
import _ from 'lodash';
import MainNav from '../pug/blocks/main-nav/main-nav';
import MobileNav from '../pug/blocks/mobile-nav/mobile-nav';
import Header from '../pug/blocks/header/header';
import Utils from './utils';

class App { 
	constructor() {
		this.mainNav = new MainNav();
		this.mobileNav = new MobileNav();
		this.header = new Header();
		this.utils = Utils;
	}
}

window.$ = $;
window._ = _;
window.app = new App();
