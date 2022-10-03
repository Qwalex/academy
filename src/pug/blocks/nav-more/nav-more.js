import Utils from '../../../js/utils';

export default class navMore {
  constructor(navMoreToggle) {
    this.$navMoreToggle = $(navMoreToggle);
    this.init();
  }

  init() {
    this.setListeners();
    this.createNavMore();
    this.$navMoreToggle.append(this.$navMore);
  }

  setListeners() {
    this.$navMoreToggle.on('mouseenter', () => {  
      if (Utils.isTouchDevice()) {
        return;
      }

      this.$navMore.show();
    })

    this.$navMoreToggle.on('mouseleave', () => {
      if (Utils.isTouchDevice()) {
        return;
      }

      this.$navMore.hide();
    });

    this.$navMoreToggle.on('click', () => {
      if (!Utils.isTouchDevice()) {
        return;
      }

      this.$navMore.toggle();
    });
  }

  getItem(item) {
    const $link = item.$item.find('a');
    const href = $link.attr('href');
    const title = $link.html();
    return $(`<li class="nav-more__item"><a href="${href}" class="nav-more__link">${title}</a></li>`);
  }

  createNavMore() {
    this.$navMore = $('<ul class="nav-more"></ul>');
    this.addItems();
  }

  addItems(items = []) {
    this.$navMore.empty();
    this.$navMoreToggle.toggle(items.length > 0);
    items.forEach((item) => {
      this.$navMore.append(this.getItem(item));
    });
  }

  resize({ items }) {
    this.addItems(items);
  }

  isTouchDevice() {
    return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
  }
}