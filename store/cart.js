export const state = () => ({
    // products will be an array with objects containing the productID and the amount
    products: [],
})

export const mutations = {

    add(state, product) {
        if(state.products.some(cartItem => cartItem.productID === product.ProductID)) {
            // if product is in cart already: update amount
            state.products = state.products.map(cartItem => {
                return (cartItem.productID === product.ProductID) ? {productID: cartItem.productID, amount: cartItem.amount + 1} : cartItem
            })
        } else {
            // else add product to cart
            state.products.push({productID: product.ProductID, amount: 1})
        }
    },
    subtract(state, product) {
        state.products = state.products.map(cartItem => {
            return (cartItem.productID === product.ProductID) ? {productID: cartItem.productID, amount: cartItem.amount - 1} : cartItem
        })
    },
    remove(state, product) {
        state.products = state.products.filter(cartItem => cartItem.productID !== product.ProductID)
    },
    empty(state) {
        state.products = []
    }

}

export const getters = {
    getCartAmount(state) {
        // add up the total of all products added to the cart
        let cartAmount = 0;
        state.products.forEach(cartItem => {
            cartAmount += cartItem.amount
        })
        return cartAmount
    }
}