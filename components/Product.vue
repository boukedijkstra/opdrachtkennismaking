<template>
    <article class="product-card">
        <NuxtLink :to="`/products/${product.ProductID}`">
            <div class="product-image">
                <img class="image" :src="imageUrl" :alt="product.MainDescription">
            </div>
            <div class="product-description">
                {{ product.MainDescription }}
            </div>
        </NuxtLink>
        <div class="card-bottom">
            <div class="product-price">
                € {{ productPrice }}
            </div>
            <div class="product-quantity-controller">
                <fa class="icon-plus" icon="square-plus" @click="addToCart" />
                <!-- only show 'amount in cart' and the remove button if the product is in the cart -->
                <div class="amount-in-cart" v-if="amountInCart > 0">
                    <p>{{ amountInCart }}</p>
                </div>
                <fa v-if="amountInCart > 0" class="icon-minus" icon="square-minus" @click="removeFromCart" />
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Product',
    props: {
        product: Object
    },
    methods: {
        addToCart() {
            this.$store.commit('cart/add', this.product)
        },
        removeFromCart() {
            if(this.amountInCart > 1) {
                this.$store.commit('cart/subtract', this.product)
            } else if(this.amountInCart === 1) {
                this.$store.commit('cart/remove', this.product)
            }
        }
    },
    computed: {
        amountInCart() {
            // find how many of this particular product is in the cart
            let amount = 0
            this.$store.state.cart.products.forEach(cartItem => {
                if(cartItem.productID === this.product.ProductID) {
                    amount = cartItem.amount
                }
            })
            return amount
        },
        imageUrl() {
            // resizing the image (I learned how to do this from the dekamarkt webshop ;)
            return this.product.ProductPictures[0].Url + '?width=170&height=170&mode=crop';
        },
        productPrice() {
            // replace dot with comma in product price
            return this.product.ProductPrices[0].Price.toString().replace('.', ',')
        }
    }

}
</script>

<style>

.product-card {
    padding: 10px;
    background-color: #FFF;
    border-radius: 0 2px 2px 2px;
    box-shadow: 1px 1px 4px 0 rgba(30,30,30,0.16);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 400px;
}

.image {
    display: block;
    width: 170px;
    height: 170px;
    margin: auto;
}

.product-description {
    color: #484848;
    margin-top: 20px;
    margin-bottom: 30px;
}

.card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-price {
    font-size: 1.3rem
}

.product-quantity-controller {
    display: flex;
    justify-content: right;
}

.amount-in-cart {
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-plus {
    cursor: pointer;
    color: #87be34;
    font-size: 2rem;
}

.icon-minus {
    cursor: pointer;
    color: #e20613;
    font-size: 2rem;
}

</style>