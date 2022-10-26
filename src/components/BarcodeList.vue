<script>
export default {
  name: "BarcodeList",
  components: {},
  data() {
    return {
      scanning: false
    };
  },
  props: {
    category: String,
    barcodes: Array
  },
  emits: ["close-request", "view-request", "new-barcode"],
  methods: {
    onDecode(result) {
      alert(result);
    },
    onLoaded() {
      alert("pronto!");
    }
  }
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
    <div class="header">
      <h2>{{ category }} Barcodes</h2>
      <button @click.prevent="scanning = true">+</button>
    </div>
    <div v-if="scanning == true">
      <button @click.prevent="scanning = false">X</button>
    </div>
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
