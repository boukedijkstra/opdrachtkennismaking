<template>
  <div class="filter-options">
      <div v-for="brand in $store.state.products.brands" 
      :key="brand" 
      @click="filterBrand(brand)" 
      :class="[$store.state.products.filteredBrands.includes(brand) ? 'active' : '', 'option']">
          {{ brand }}
      </div>
  </div>
</template>

<script>
export default {
    name: "FilterBrand",
    methods: {
        filterBrand(brand) {
            // set the filter in the state and then run the filter and sort mutations
            this.$store.commit('products/setFilteredBrands',brand)
            this.$store.commit('products/filterProducts')
            this.$store.commit('products/sortProducts')
        }
    }

}
</script>

<style scoped>

.filter-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 1rem;
    padding: 10px;
}
.option {
    cursor: pointer;
}
.active {
    color: #e20613;
}

</style>