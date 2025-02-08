<template>
  <div class="card product-card font-poppins">
    <div class="image-container">
      <img :src="product.image" class="card-img-top" :alt="product.name" />
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-primary fw-bold">${{ product.price }}</p>
      <button class="btn btn-warning w-100" @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart(product) {
      alert(`${product.name} added to cart!`);
    }
  }
};
</script>

<style scoped>
.product-card {
  width: 100%;
  max-width: 200px; /* Adjust card width */
  margin: auto;
}

.image-container {
  width: 100%;
  height: 150px; /* Fixed image height */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensure images fit properly */
}
</style>
