<template>

    <div class="filters-container">
        <div class="filters">
            <div class="filter" @click="displayFilter('brand')" :class="showFilter === 'brand' ? 'active' : ''">
                <fa icon="filter" /> Merken 
                <span v-if="filteredBrandsAmount > 0">(<span class="amount">{{ filteredBrandsAmount }}</span>)</span>
                <fa icon="angle-down" v-if="showFilter !== 'brand'" /><fa icon="angle-up" v-if="showFilter === 'brand'" />
            </div>
            <div class="filter" @click="displayFilter('webSubGroup')" :class="showFilter === 'webSubGroup' ? 'active' : ''">
                <fa icon="filter" /> Categorieën
                <span v-if="filteredWebSubGroupsAmount > 0">(<span class="amount">{{ filteredWebSubGroupsAmount }}</span>)</span>
                <fa icon="angle-down" v-if="showFilter !== 'webSubGroup'" /><fa icon="angle-up" v-if="showFilter === 'webSubGroup'" />
            </div>
            <div class="filter" @click="displayFilter('productOffers')" :class="showFilter === 'productOffers' ? 'active' : ''">
                <fa icon="filter" /> Aanbiedingen <fa icon="angle-down" v-if="showFilter !== 'productOffers'" /><fa icon="angle-up" v-if="showFilter === 'productOffers'" />
            </div>
            <div class="sort">
                <select v-model="selectedSort" class="selectSort">
                    <option disabled value="">Sorteer op</option>
                    <option value="priceAsc">Prijs oplopend</option>
                    <option value="priceDesc">Prijs aflopend</option>
                </select>
            </div>
        </div>

        <FilterBrand v-if="showFilter === 'brand'" />
        <FilterWebSubGroup v-if="showFilter === 'webSubGroup'" />
        <FilterProductOffers v-if="showFilter === 'productOffers'" />

    </div>

</template>

<script>

import FilterBrand from "../components/FilterBrand.vue"
import FilterWebSubGroup from "../components/FilterWebSubGroup.vue"
import FilterProductOffers from "../components/FilterProductOffers.vue"

export default {
    name: "Filters",
    data() {
        return {
            showFilter: '',
            selectedSort: ''
        }
    },
    components: {
        FilterBrand,
        FilterWebSubGroup,
        FilterProductOffers
    },
    methods: {
        displayFilter(filter) {
            this.showFilter = this.showFilter === filter ? '' : filter
        }
    },
    watch: {
        selectedSort(sortOn) {
            // set the sort state and then run the sortProducts function
            this.$store.commit('products/setSort', sortOn)
            this.$store.commit('products/sortProducts')
        }
    },
    computed: {
        filteredBrandsAmount() {
            return this.$store.state.products.filteredBrands.length
        },
        filteredWebSubGroupsAmount() {
            return this.$store.state.products.filteredWebSubGroups.length
        }
    }

}
</script>

<style scoped>

.filters-container {
    width: 100%;
    background-color: #FFF;
    border-radius: 0 2px 2px 2px;
    box-shadow: 1px 1px 4px 0 rgba(30,30,30,0.16);
    padding: 10px 0;
    margin-bottom: 20px;
}

.filters {
    display: flex;
    flex-wrap: wrap;
}

.filter {
    margin: auto;
    padding: 10px 0;
    min-width: 150px;
    cursor: pointer;
}

.amount {
    color: #e20613;
}

.sort {
    margin: auto;
    padding: 10px 0;
    min-width: 150px;
}

.selectSort {
    width: 140px;
    height: 40px;
    background-color: #b3b3b3;
    color: white;
    border-radius: 3px;
    border: 0;
    padding: 10px;
}

.selectSort option {
    width: 140px;
}

.active {
    color: #e20613;
}

</style>