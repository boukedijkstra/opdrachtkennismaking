<template>
  <div>
    <Filters />
    <div class="products-container">
      <p v-if="$store.state.products.loading">Producten laden.....</p>
      <p v-else-if="!$store.state.products.filteredList.length">Geen producten gevonden</p>
      <Product v-else v-for="product in $store.state.products.filteredList" :key="product.ProductID" :product="product" />
    </div>
  </div>
</template>

<script>

import Filters from "../../components/Filters.vue"
import Product from "../../components/Product.vue"

export default {
  name: 'IndexPage',
  components: {
    Filters,
    Product
  }
}
</script>

<style>
.products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 1rem;
    margin-bottom: 20px;
}
</style>