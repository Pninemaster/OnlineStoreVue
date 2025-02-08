<template>
  <div class="font-poppins">
    <!-- Hero Section -->
    <section
      class="hero text-white text-center py-5"
      style="
        height: 200%;
        background: url('https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg')
          no-repeat center center/cover;
      "
    >
      <div class="container">
        <h1>Welcome to Our Store</h1>
        <p>
          Your one-stop shop for all your favorite products. Quality guaranteed.
        </p>
        <a href="/shop" class="btn btn-light btn-lg">Start Shopping</a>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products py-5">
      <div class="container">
        <h2 class="text-center mb-4">Featured Products</h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="product in featuredProducts"
            :key="product.id"
          >
            <div class="card">
              <img
                :src="product.image"
                class="card-img-top"
                :alt="product.name"
              />
              <div class="card-body text-center">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.price | currency }}$</p>
                <a :href="product.link" class="btn bg-pink-600 text-light">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Shop by Categories</h2>
        <div class="row">
          <div
            class="col-md-3 mb-4"
            v-for="category in categories"
            :key="category.id"
          >
            <div class="category-card text-center">
              <img
                :src="category.image"
                class="img-fluid mb-3"
                :alt="category.name"
              />
              <h5>{{ category.name }}</h5>
              <a :href="category.link" class="btn bg-pink-600 text-light"
                >Shop Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offers Section -->
    <section class="special-offers py-5">
      <div class="container text-center">
        <h2 class="mb-4">Special Offers</h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="offer in specialOffers"
            :key="offer.id"
          >
            <div class="offer-card bg-pink-600 text-white p-4">
              <h5>{{ offer.title }}</h5>
              <p>{{ offer.description }}</p>
              <a :href="offer.link" class="btn btn-light">View Offer</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Customer Testimonials</h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <div class="testimonial-card text-center">
              <p class="mb-4">"{{ testimonial.comment }}"</p>
              <p>
                <strong>- {{ testimonial.customer }}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section
      class="cta py-5 text-white text-center"
      style="background-color: #222;"
    >
      <div class="container">
        <h2>Don't Miss Out!</h2>
        <p>Exclusive deals await. Shop now and save big!</p>
        <a href="/shop" class="btn btn-light btn-lg">Shop Now</a>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 Our Store | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 199.99,
          image: "https://hips.hearstapps.com/hmg-prod/images/wireless-headphone-display-in-the-store-royalty-free-image-1678138342.jpg?crop=1xw:0.99928xh;center,top&resize=1200:*",
          link: "/product/wireless-headphones",
        },
        {
          id: 2,
          name: "Smartwatch",
          price: 299.99,
          image: "https://cdn-img.oraimo.com/tinymce/images/f09809f04981e8ab820cb2a927dd78b766f8c5698d847.jpg",
          link: "/product/smartwatch",
        },
        {
          id: 3,
          name: "Gaming Laptop",
          price: 1499.99,
          image: "https://rog.asus.com/media/1694045252838.jpg",
          link: "/product/gaming-laptop",
        },
      ],
      categories: [
        {
          id: 1,
          name: "Electronics",
          image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D",
          link: "/category/electronics",
        },
        {
          id: 2,
          name: "Clothing",
          image: "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
          link: "/category/clothing",
        },
        {
          id: 3,
          name: "Home & Kitchen",
          image: "https://media.licdn.com/dms/image/D5612AQF60EVqiwSSIQ/article-cover_image-shrink_720_1280/0/1695632118691?e=2147483647&v=beta&t=hc36xZjzuF763JKBEHdG6OCLvsBcIsspAgwJgfk9S6E",
          link: "/category/home-kitchen",
        },
        {
          id: 4,
          name: "Beauty",
          image: "https://visagetechnologies.com/app/uploads/2023/03/beauty-trends-cover-picture-copy.webp",
          link: "/category/beauty",
        },
      ],
      specialOffers: [
        {
          id: 1,
          title: "Summer Sale - 50% Off",
          description: "Get 50% off on selected summer items.",
          link: "/sale/summer",
        },
        {
          id: 2,
          title: "New Arrivals - 20% Off",
          description: "Shop the latest arrivals and save 20%.",
          link: "/sale/new-arrivals",
        },
        {
          id: 3,
          title: "Buy 1 Get 1 Free",
          description: "Buy one item and get another one for free.",
          link: "/sale/bogo",
        },
      ],
      testimonials: [
        {
          id: 1,
          comment: "Great customer service and fast delivery!",
          customer: "Sarah W.",
        },
        {
          id: 2,
          comment: "Amazing quality products. Will definitely shop again!",
          customer: "John D.",
        },
        {
          id: 3,
          comment: "I love the discounts. Best place to shop online!",
          customer: "Alice M.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  background: url("https://example.com/hero-image.jpg") no-repeat center center;
  background-size: cover;
}

.featured-products .card,
.categories .category-card,
.special-offers .offer-card,
.testimonials .testimonial-card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.featured-products .card img,
.categories .category-card img {
  height: 200px;
  object-fit: cover;
}

.offer-card {
  background-color: #222;
  padding: 20px;
  border-radius: 8px;
}

.testimonial-card {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
}

.cta {
  background-color: #222;
}

footer {
  background-color: #111;
}
</style>
