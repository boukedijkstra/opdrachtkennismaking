<template>
  <div class="filter-options">
      <div v-for="webSubGroup in $store.state.products.webSubGroups" 
      :key="webSubGroup" 
      @click="filterWebSubGroup(webSubGroup)" 
      :class="[$store.state.products.filteredWebSubGroups.includes(webSubGroup) ? 'active' : '', 'option']">
          {{ webSubGroup }}
      </div>
  </div>
</template>

<script>
export default {
    name: "FilterWebSubGroup",
    methods: {
        filterWebSubGroup(webSubGroup) {
            // set the filter in the state and then run the filter en sort mutations
            this.$store.commit('products/setFilteredWebSubGroups',webSubGroup)
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