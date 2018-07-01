<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ["products"]
  computed: {
    products() {
      return this.$store.state.products
    },
    saleProducts() {
      return this.$store.getters.saleProducts
    }
  }
};
</script>

<style scoped>
#product-list-two {
  background: rgb(163, 227, 247);
  box-shadow: rgb(212, 190, 171);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-two ul {
  padding: 0;
  list-style-type: none;
}
#product-list-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860CE8;
  display: block;
}
</style>

