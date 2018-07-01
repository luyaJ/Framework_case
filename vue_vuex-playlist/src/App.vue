<template>
  <div id="app">
    <!-- <product-list-one :products="products"></product-list-one>
    <product-list-two :product="products"></product-list-two> -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'

export default {
  name: "app",
  components: {
    ProductListOne,
    ProductListTwo
  },
  data() {
    return {
      // products: [
      //   { name: "马云", price: 200 },
      //   { name: "马化腾", price: 140 },
      //   { name: "马冬梅", price: 80 },
      //   { name: "马甲", price: 20 }
      // ]
    };
  }
};
</script>

<style>
</style>
