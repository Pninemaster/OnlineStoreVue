<template>
  <div class="container py-4 font-poppins">
    <!-- Search and Sorting Controls -->
    <div class="row mb-3">
      <div class="col-md-6">
        <input
          v-model="searchQuery"
          class="form-control"
          placeholder="Search products..."
        />
      </div>
      <div class="col-md-6">
        <select v-model="sortBy" class="form-select">
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="row">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="col-6 col-md-4 col-lg-2 mb-4"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ProductCard },
  data() {
    return {
      searchQuery: "",
      sortBy: "name",
      products: [
        {
          id: 1,
          name: "Laptop",
          price: 999,
          image: "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg",
        },
        {
          id: 2,
          name: "Phone",
          price: 699,
          image:
            "https://images-cdn.ubuy.co.in/65cd92311bc73125c2446cef-nubia-red-magic-9-pro-5g-mobile-phone.jpg",
        },
        {
          id: 3,
          name: "Tablet",
          price: 499,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcjeeWDAgT4d7zAoXXAvPgpodUeYkpuj2ZA&s",
        },
        {
          id: 4,
          name: "Headphones",
          price: 199,
          image: "https://storage.googleapis.com/pod_public/1300/199160.jpg",
        },
        {
          id: 5,
          name: "Smartwatch",
          price: 299,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUenhb34V1tnn6-pWz3uwFatH9RVDYi4T2AA&s",
        },
        {
          id: 6,
          name: "Monitor",
          price: 499,
          image:
            "https://m.media-amazon.com/images/I/81-pe8AZQLL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 7,
          name: "Projector",
          price: 199,
          image:
            "https://m.media-amazon.com/images/I/718bwmxETLL._AC_SL1500_.jpg",
        },
        {
          id: 8,
          name: "RGB Mouse",
          price: 49,
          image:
            "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2017/06/gaming-mouse-with-a-blue-glow.jpeg",
        },
        {
          id: 9,
          name: "Mouse Pad",
          price: 29,
          image:
            "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/t/16/42c56c80-e375-4cdd-873d-b942faa4e80f.jpg",
        },
        {
          id: 10,
          name: "RGB Keyboard",
          price: 99,
          image:
            "https://cdn.shopify.com/s/files/1/0267/9111/6911/files/TECKNET_RGB_Gaming_Keyboard-2_085e36cd-9add-433b-a8a8-e068eeb91ab3.jpg?v=1736930149",
        },
        {
          id: 11,
          name: "GPU",
          price: 1499,
          image:
            "https://www.zotac.com/download/files/styles/w1024/public/product_gallery/graphics_cards/zt-b50900b-10p-image01.jpg?itok=JZKplkzM",
        },
        {
          id: 12,
          name: "Frost Gaming PC",
          price: 2099,
          image:
            "https://rgbcustompc.com/cdn/shop/files/SY-PCBuild-FrostNov2023.png?v=1703786732",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products
        .filter((product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .sort((a, b) => {
          if (this.sortBy === "name") return a.name.localeCompare(b.name);
          if (this.sortBy === "price") return a.price - b.price;
          return 0;
        });
    },
  },
};
</script>
