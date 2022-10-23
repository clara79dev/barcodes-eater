<template>
  <h1>Barcodes Eater</h1>
  <img alt="Barcode logo" src="./assets/logo.jpg" />
  <BarcodeCategories
    v-if="currentView == 'BarcodeCategories' && barcodes"
    :categories="barcodeCategories"
    @category-selected="onCategorySelected"
  ></BarcodeCategories>
  <BarcodeList
    v-if="currentView == 'BarcodeList' && currentCategory"
    :category="currentCategory"
    :barcodes="currentBarcodes"
    @close-request="onBarcodeViewCloseRequest"
    @view-request="onBarcodeViewRequest($event)"
  ></BarcodeList>
  <BarcodeCarousel
    v-if="currentView == 'BarcodeCarousel' && currentCategory"
    :category="currentCategory"
    :barcodes="currentBarcodes"
    @close-request="onBarcodeViewCloseRequest"
    @view-request="onBarcodeViewRequest($event)"
  ></BarcodeCarousel>
</template>

<script>
import BarcodeCategories from "./components/BarcodeCategories";
import BarcodeList from "./components/BarcodeList";
import BarcodeCarousel from "./components/BarcodeCarousel";

export default {
  name: "App",
  components: {
    BarcodeCategories,
    BarcodeList,
    BarcodeCarousel
  },
  data() {
    return {
      views: ["BarcodeCategories", "BarcodeList"],
      currentView: "BarcodeCategories",
      currentCategory: "",
      currentBarcodes: [],
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
      this.currentCategory = category;
      this.currentBarcodes = this.barcodes.filter(
        bc => bc.category == category
      );
      this.currentView = "BarcodeList";
    },
    onBarcodeViewCloseRequest() {
      this.currentCategory = "";
      this.currentBarcodes = [];
      this.currentView = "BarcodeCategories";
    },
    onBarcodeViewRequest(viewType) {
      console.log(viewType);
      this.currentView = "Barcode" + viewType;
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
