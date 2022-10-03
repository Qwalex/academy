export default class analyzesItem {
    constructor(el) {
        this.el = el;
        this.$el = $(this.el);
        this.$buttonCart = this.$el.find('.js-analyzes-item-to-cart');
        this.$checkbox = this.$el.find('.js-analyzes-item-checkbox');

        this.setListeners();
    }

    setListeners() {
        this.$buttonCart.on('click', () => {
            this.toCart();
        })

        this.$checkbox.on('change', () => {
            if (this.$checkbox.is(':checked')) {
                this.toCart();
                return;
            }
            this.removeFromCart();
        });
    }

    removeFromCart() {
        const data = this.getItemData();
        window.app.cart.removeItem(data.id);
    }

    toCart() {
        window.app.cart.addItem(this.getItemData());
    }

    getItemData() {
        return {
            id: this.$el.data('id'),
            name: this.$el.data('name'),
            price: this.$el.data('price'),
            code: this.$el.data('code'),
        }
    }
}