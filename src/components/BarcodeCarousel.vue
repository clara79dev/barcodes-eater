<script>
import { Carousel, Slide } from "vue-snap";
import "vue-snap/dist/vue-snap.css";

export default {
  name: "BarcodeCarousel",
  components: {
    Carousel,
    Slide
  },
  props: {
    category: String,
    barcodes: Array
  },
  emits: ["close-request", "list-request"]
};
</script>

<template>
  <div>
    <a href="#" @click.prevent="$emit('close-request')">
      &lt;- Categorie
    </a>
    <a href="#" @click.prevent="$emit('view-request', 'List')">
      Lista -&gt;
    </a>
    <h2>{{ category }} Barcodes</h2>
    <!--carousel>
      <slide v-for="barcode in barcodes" :key="barcode.code">
        <p>{{ barcode.code }}</p>
        <p>{{ barcode.reductionStatus }}</p>
      </slide>
    </carousel-->
    <carousel class="story-carousel story-carousel--colors">
      <slide
        v-for="barcode in barcodes"
        :key="barcode.code"
        class="story-carousel__slide"
      >
        <div class="stacked-container">
          <p class="stacked-item">{{ barcode.code }}</p>
          <p class="stacked-item">{{ barcode.reductionStatus }}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style scoped>
.story-carousel .story-carousel__slide {
  height: 200px;
  font-size: 18px;
}

.stacked-container {
  display: flex;
  flex-direction: column;
}

.stacked-item {
  margin: 0.5em;
}
</style>
