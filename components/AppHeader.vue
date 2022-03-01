<template>
    <header class="page-header">
        <NuxtLink to="/products">
            <h2 class="header">Productoverzicht</h2>
        </NuxtLink>
        <div class="cart">
            <div class="shopping-cart">
                <fa icon="cart-shopping" />
            </div>
            <span class="cart-amount">{{ $store.getters['cart/getCartAmount'] }}</span>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
}

.header {
    color: #e20613;
}

.cart {
    padding: 10px;
    position: relative;
}

.shopping-cart {
    font-size: 1.5rem;
}

.cart-amount {
    display: block;
    background-color: #87be34;
    font-size: 0.75rem;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 30px;
    bottom: 30px;
}

</style>