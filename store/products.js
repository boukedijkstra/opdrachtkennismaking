import axios from "axios"

export const state = () => ({
    loading: false,
    // list is an unmodified list of all the products from the api endpoint
    list: [],
    // filteredList is initially filled with all products but when a filter is selected, it will contain the filtered (and sorted) products only
    // so this is the array we're looping through on the products page
    filteredList: [],

    brands: [],
    filteredBrands: [],

    webSubGroups: [],
    filteredWebSubGroups: [],

    sort: ''
})

export const mutations = {
    setLoading(state, loading) {
        state.loading = loading
    },
    setProducts(state, products) {
        // After the api call is done, this mutation is called to set the state with the products from the api
        state.list = products
        state.filteredList = products

        // find all unique Brands
        state.brands = products.map(product => product.Brand)
        .filter((value, index, self) => self.indexOf(value) === index)
        .filter(brand => brand !== null)

        // find all unique SubWebGroups
        products.forEach(product => {
            product.WebSubGroups.forEach(group => {
                if(!state.webSubGroups.includes(group.Description)) {
                    state.webSubGroups.push(group.Description)
                }
            })
        })

    },
    setFilteredBrands(state, brand) {
        // toggle brand filter
        if(state.filteredBrands.includes(brand)) {
            state.filteredBrands = state.filteredBrands.filter(b => b !== brand)
        } else {
            state.filteredBrands.push(brand)
        }
    },
    setFilteredWebSubGroups(state, webSubGroup) {
        // toggle webSubGroup filter
        if(state.filteredWebSubGroups.includes(webSubGroup)) {
            state.filteredWebSubGroups = state.filteredWebSubGroups.filter(b => b !== webSubGroup)
        } else {
            state.filteredWebSubGroups.push(webSubGroup)
        }
    },
    setSort(state, sortOn) {
        state.sort = sortOn
    },
    filterProducts(state) {
        
        // filter on brands if the filteredBrands array is not empty
      state.filteredList = state.filteredBrands.length ? state.list.filter(product => state.filteredBrands.includes(product.Brand)) : state.list

      // filter on webSubGroup
      if(state.filteredWebSubGroups.length) {
        state.filteredList = state.filteredList.filter(product => {
          let showProduct = false
          product.WebSubGroups.forEach(webSubGroup => {
            if(state.filteredWebSubGroups.includes(webSubGroup.Description)) {
              showProduct = true
            }
          })
          return showProduct
        })
      }

    },
    sortProducts(state) {
        // update the filteredList with sorted products
        if(state.sort === 'priceAsc') {
            state.filteredList = state.filteredList.sort((a, b) => {
              return a.ProductPrices[0].Price - b.ProductPrices[0].Price
            })
        } else if(state.sort === 'priceDesc') {
            state.filteredList = state.filteredList.sort((a, b) => {
                return b.ProductPrices[0].Price - a.ProductPrices[0].Price
            })
        }
        return
    }
}

export const actions = {
     async fetchProducts({ commit }) {
        try {
            commit('setLoading', true)
            const res = await axios.get(`https://api.dekamarkt.nl/v1/assortmentcache/group/281/104?api_key=${process.env.productsApiKey}`)
            commit('setProducts', res.data)
            commit('setLoading', false)
        } catch (err) {
            console.log(err)
        }
     }
}