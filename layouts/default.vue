<template>
  <div class="container">
    <AppHeader />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue"

export default {
  components: {
    AppHeader
  },
  created() {
    this.$store.dispatch('products/fetchProducts');
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; 
}
  
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block; 
}
  
body {
  line-height: 1;
  font-family: Verdana,sans-serif;
}
  
ol, ul {
  list-style: none; 
}
  
blockquote, q {
  quotes: none; 
}
  
table {
  border-collapse: collapse;
  border-spacing: 0; 
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 10px;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  color: inherit;
}

</style>