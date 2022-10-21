<script>
export default {
  name: "BarcodeCategories",
  props: {
    categories: Array
  },
  emits: ["category-selected"]
};
</script>

<template>
  <h2>Barcode Categories</h2>
  <ul v-if="categories.length">
    <li v-for="category in categories" :key="category">
      <a href="#" @click.prevent="$emit('category-selected', category)">
        <h3>{{ category }}</h3>
      </a>
    </li>
  </ul>
  <p v-else>No barcodes available</p>
</template>

<style scoped></style>
