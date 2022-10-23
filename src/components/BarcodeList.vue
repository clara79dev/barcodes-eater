<script>
export default {
  name: "BarcodeList",
  props: {
    category: String,
    barcodes: Array
  },
  emits: ["close-request", "view-request"]
};
</script>

<template>
  <div>
    <a href="#" @click.prevent="$emit('close-request')">
      &lt;- Torna alle categorie
    </a>
    <a href="#" @click.prevent="$emit('view-request', 'Carousel')">
      Scorrimento -&gt;
    </a>
    <h2>{{ category }} Barcodes</h2>
    <ul v-if="barcodes.length">
      <li v-for="barcode in barcodes" :key="barcode.code">
        <p>{{ barcode.code }}</p>
        <p>{{ barcode.reductionStatus }}</p>
      </li>
    </ul>
    <p v-else>No barcodes available</p>
  </div>
</template>

<style scoped></style>
