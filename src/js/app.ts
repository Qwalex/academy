import Footer from "../pug/blocks/footer/footer";
import MainNav from "../pug/blocks/main-nav/main-nav";

class App {
	footer: Footer;
	mainNav: MainNav;

	constructor() {
		this.footer = new Footer();
		this.mainNav = new MainNav();
	}
}

declare global {
	interface Window {
		app: App;
	}
}

window.app = new App();
