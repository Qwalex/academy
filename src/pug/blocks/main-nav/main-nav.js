import NavMore from '../nav-more/nav-more';

export default class MainNav {
  constructor() {
    this.$nav = $('.js-main-nav');
    this.$list = this.$nav.find('.js-main-nav-list');
    this.$items = this.$nav.find('.js-main-nav-item');
    this.$navMoreToggle = this.$nav.find('.js-nav-more-toggle');
    this.$window = $(window);
    this.classes = {
      items: {
        hidden: 'main-nav__item--hidden',
      },
    }
    this.itemsData = [];

    this.setItemsData();
    this.setListeners();
    this.navMore = new NavMore(this.$navMoreToggle);
    this.resize();
  }

  setListeners() {
    this.$window.on('resize', _.throttle(() => this.resize(), 300));
  };

  setItemsData() {
    this.itemsData = this.$items.toArray().map((item) => ({
      item: item,
      $item: $(item),
      width: $(item).outerWidth(),
      navMore: !!$(item).data('nav-more'),
    }));
  }

  getHiddenElementsByWidth(width) {
    let elementsWidth = 0;
    return this.itemsData.filter((item) => {
      const isVisible = item.navMore || ((elementsWidth + item.width) <= width);
      elementsWidth += item.width;
      return !isVisible;
    });
  }

  setVisibilityForItems(width) {
    console.log(window)
    const hiddenElements = this.getHiddenElementsByWidth(width).map((item) => item.item);
    this.$items.not(hiddenElements).removeClass(this.classes.items.hidden);
    $(hiddenElements).addClass(this.classes.items.hidden);
  }

  resize() {
    const availableWidth = this.$list.innerWidth();
    this.setItemsData();
    this.setVisibilityForItems(availableWidth);
    this.navMore.resize({
      items: this.getHiddenElementsByWidth(availableWidth),
    });
  }
}