<template>
  <h1>Barcodes Eater</h1>
  <img alt="Barcode logo" src="./assets/logo.jpg" />
  <BarcodeCategories
    :categories="barcodeCategories"
    @category-selected="onCategorySelected"
  ></BarcodeCategories>
</template>

<script>
import BarcodeCategories from "./components/BarcodeCategories";

export default {
  name: "App",
  components: {
    BarcodeCategories: BarcodeCategories
  },
  data() {
    return {
      barcodes: [
        {
          category: "Eurospin",
          code: "1234567890",
          reductionStatus: "UNUSED"
        },
        {
          category: "Conad",
          code: "0987654321",
          reductionStatus: "PARTIALLY_USED"
        },
        {
          category: "Eurospin",
          code: "1029384756",
          reductionStatus: "TOTALLY_USED"
        }
      ]
    };
  },
  computed: {
    barcodeCategories() {
      const barcodeCategories = this.barcodes.map(bc => bc.category);
      const barcodeCategoriesSet = new Set(barcodeCategories);
      const uniqueBarcodeCategories = Array.from(barcodeCategoriesSet);
      return uniqueBarcodeCategories;
    }
  },
  methods: {
    onCategorySelected(category) {
      console.log(category);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
