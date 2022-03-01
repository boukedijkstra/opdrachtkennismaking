<template>
  <div class="filter-options">
    Geen aanbiedingen
  </div>
</template>

<script>
export default {

  // De ProductOffers array was bij elk product leeg dus ik heb dit filter achterwege gelaten

}
</script>

<style>

.filter-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 1rem;
    padding: 10px;
}

</style>