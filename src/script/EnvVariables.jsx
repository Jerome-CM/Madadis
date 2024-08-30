// EnvVariables.js
const CartState = {
    nbrProductInCart: 0,
    totalCartPrice: 0,

    countProductInCart() {
        this.nbrProductInCart++;
        return this.nbrProductInCart;
    },

    updateTotalCartPrice(price) {
        this.totalCartPrice += price;
        return this.totalCartPrice;
    }
};

export default CartState;


