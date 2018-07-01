<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
export default {
  // props: ["products"]
  computed: {
    products() {
      return this.$store.state.products
    },
    // saleProducts() {
    //   return this.$store.getters.saleProducts
    // }
    ...mapGetters([
      "saleProducts"
    ])
  },
  methods: {
    reducePrice(amount) {
      // this.$store.commit('reducePrice')
      this.$store.dispatch('reducePrice', amount)
    }
  }
};
</script>

<style scoped>
#product-list-one {
  background: rgb(236, 248, 168);
  box-shadow: rgb(212, 190, 171);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
  list-style-type: none;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: rgb(207, 119, 37);
}
</style>
