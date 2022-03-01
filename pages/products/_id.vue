<template>
<div class="product-container">
    <NuxtLink to="/products">
        <p class="back"><fa icon="arrow-left" /> Terug</p>
    </NuxtLink>
    <div class="product-card" v-if="product">
        <div class="product-image">
            <img class="image" :src="imageUrl" :alt="product.MainDescription">
        </div>
        <div class="product-description">
            {{ product.MainDescription }}
        </div>
        <div class="card-bottom">
            <div class="product-price">
                € {{ product.ProductPrices[0].Price.toString().replace('.', ',') }}
            </div>
            <div class="product-quantity-controller">
                <fa class="icon-plus" icon="square-plus" @click="addToCart" />
                <div class="amount-in-cart" v-if="amountInCart > 0">
                    <p>{{ amountInCart }}</p>
                </div>
                <fa v-if="amountInCart > 0" class="icon-minus" icon="square-minus" @click="removeFromCart" />
            </div>
        </div>
    </div>
    <div v-else>
        <p>Oeps, product niet gevonden!</p>
    </div>
</div>
</template>

<script>

export default {

    data() {
        return {
            product: {}
        }
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
            let amount = 0
            this.$store.state.cart.products.forEach(cartItem => {
                if(cartItem.productID === this.product.ProductID) {
                    amount = cartItem.amount
                }
            })
            return amount
        },
        imageUrl() {
            return this.product.ProductPictures[0].Url + '?width=300&height=300&mode=crop';
        }
    },
    
    created() {

        this.product = this.$store.state.products.list.find(product => product.ProductID == this.$route.params.id)

    }

}
</script>

<style scoped>

.product-container {
    padding: 10px;
}

.image {
    width: 100%;
    height: 100%;
}

.back {
    margin-bottom: 20px;
}

</style>