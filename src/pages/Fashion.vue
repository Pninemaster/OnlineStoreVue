<template>
  <div class="font-poppins">
    <!-- Hero Section -->
    <section class="hero mt-1 text-white text-center py-5"
    style="
      width: 100%;
      height: 300px;
      object-fit: cover;">
      <div class="container">
        <h1 class="mt-4">Fashion Trends</h1>
        <p>
          Discover the latest styles and fashion trends from around the world.
        </p>
      </div>
    </section>

    <!-- Fashion Introduction Section -->
    <section class="intro py-5">
      <div class="container">
        <h2 class="text-center mb-4">What is Fashion?</h2>
        <p>
          Fashion is more than just clothing; it is a form of self-expression.
          It’s about the art of combining colors, fabrics, and silhouettes to
          create looks that reflect one’s personality, culture, and mood.
          Fashion changes with the seasons, social movements, and the innovation
          of designers. Stay ahead of the curve and explore what's in style this
          season.
        </p>
      </div>
    </section>

    <!-- Key Fashion Trends Section -->
    <section class="trends py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Fashion Trends</h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="trend in fashionTrends"
            :key="trend.id"
          >
            <div class="trend-card text-center">
              <img
                :src="trend.image"
                alt="trend.name"
                class="trend-image mb-3"
              />
              <h4>{{ trend.name }}</h4>
              <p>{{ trend.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Designers Section -->
    <section class="designers py-5">
      <div class="container">
        <h2 class="text-center mb-4">Popular Fashion Designers</h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="designer in fashionDesigners"
            :key="designer.id"
          >
            <div class="designer-card text-center">
              <img
                :src="designer.image"
                alt="designer.name"
                class="designer-image mb-3"
              />
              <h4>{{ designer.name }}</h4>
              <p>{{ designer.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="products py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Featured Fashion Products</h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="product in featuredProducts"
            :key="product.id"
          >
            <div class="product-card text-center">
              <img
                :src="product.image"
                alt="product.name"
                class="product-image mb-3"
              />
              <h4>{{ product.name }}</h4>
              <p>{{ product.price | currency }} $</p>
              <a :href="product.link" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fashion Gallery Section -->
    <section class="gallery py-5">
      <div class="container">
        <h2 class="text-center mb-4">Fashion Gallery</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <img
              src="https://d3rcx32iafnn0o.cloudfront.net/Pictures/1024x536/6/8/6/1869686_vafashiongallery_952056.jpg"
              class="img-fluid"
              alt="Fashion Look 1"
            />
          </div>
          <div class="col-md-4 mb-4">
            <img
              src="https://images.ctfassets.net/biom0eqyyi6b/6JRMglo8ecaS0OmYMaMsC6/8ee4e65edd94f4042513c8a331555101/SP2016-The-Fashion-Gallery-1-HiRes.jpg?w=1352&q=75&fit=scale&fm=webp"
              class="img-fluid"
              alt="Fashion Look 2"
            />
          </div>
          <div class="col-md-4 mb-4">
            <img
              src="https://brinklight.com/media/mgs/portfolio/image/b/r/brink-licht-fashion-gallery-schiphol-moltoluce-_plafond-spot_6_1_.png "
              class="img-fluid"
              alt="Fashion Look 3"
            />
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
        <h2>Stay Stylish with the Latest Trends</h2>
        <p>
          Explore our collection of the most stylish outfits for every season.
        </p>
        <a href="/shop" class="btn btn-light">Shop the Latest Collection</a>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 FashionHub | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FashionPage",
  data() {
    return {
      fashionTrends: [
        {
          id: 1,
          name: "Sustainable Fashion",
          description:
            "Fashion with a focus on environmental sustainability, using eco-friendly materials.",
          image:
            "https://cdn.bulbapp.io/frontend/images/a9a8b5a5-61b2-42c6-9e9f-93f5dd7cc4de/1",
        },
        {
          id: 2,
          name: "Vintage Styles",
          description:
            "The resurgence of retro fashion, inspired by the 80s and 90s styles.",
          image:
            "https://www.ocregister.com/wp-content/uploads/migration/mm2/mm2pv3-b781103067z.120130430075332000g4r1dkjsj.2.jpg?w=1800&resize=1800,1800",
        },
        {
          id: 3,
          name: "Athleisure",
          description:
            "The blending of athletic wear with casual fashion for a sporty yet fashionable look.",
          image: "https://lifewithjazz.com/wp-content/uploads/2021/02/howtostyleathleisureoutfits-1024x1024.jpg",
        },
      ],
      fashionDesigners: [
        {
          id: 1,
          name: "Coco Chanel",
          bio: "Coco Chanel is a legendary designer known for revolutionizing women’s fashion with her timeless elegance and simplicity.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfGi6rxKyOj_Pdk7G-0OQ31ZtVRHqqp1-tA&s",
        },
        {
          id: 2,
          name: "Gianni Versace",
          bio: "Gianni Versace is celebrated for his bold and glamorous approach to fashion, bringing the Italian luxury brand into the limelight.",
          image:
            "https://static01.nyt.com/images/2018/01/17/arts/versace-watching-02/versace-watching-02-superJumbo-v2.jpg",
        },
        {
          id: 3,
          name: "Alexander McQueen",
          bio: "Known for his avant-garde designs, Alexander McQueen brought a dark and rebellious edge to high fashion.",
          image:
            "https://cdn.britannica.com/67/217567-050-61C6C538/Fashion-designer-Alexander-McQueen-2003.jpg",
        },
      ],
      featuredProducts: [
        {
          id: 1,
          name: "Leather Jacket",
          price: 199.99,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_tLd9ElUc8QMPeGTaGybD5zLiGf1PYabTg&s",
          link: "/product/leather-jacket",
        },
        {
          id: 2,
          name: "Summer Dress",
          price: 89.99,
          image: "https://dmfwoh5tsii9v.cloudfront.net/sites/files/hvv/1.%20Images/IMG_1363.PNG",
          link: "/product/summer-dress",
        },
        {
          id: 3,
          name: "Running Sneakers",
          price: 29.99,
          image: "https://s3.amazonaws.com/www.irunfar.com/wp-content/uploads/2024/05/15171202/Best-Trail-Running-Shoes-Hoka-Speedgoat-6-feature.jpg",
          link: "/product/running-sneakers",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  background: url("https://assets.teenvogue.com/photos/676953b251d5b40ddf5564ec/16:9/w_3408,h_1917,c_limit/2025%20FASHION%20TRENDS.jpg")
    no-repeat center;
  background-size: cover;
}

.trend-image,
.designer-image,
.product-image {
  width: 250px; /* Set a fixed width */
  height: 250px; /* Set a fixed height */
  object-fit: cover; /* Ensures the image fills the area without distortion */
  border-radius: 8px; /* Optional: Adds rounded corners */
}

.trend-card,
.designer-card,
.product-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.trend-card h4,
.designer-card h4,
.product-card h4 {
  font-size: 1.25rem;
}

.cta {
  background-color: #222;
  padding: 40px 20px;
}

footer {
  background-color: #111;
}
</style>
