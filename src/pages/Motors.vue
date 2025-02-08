<template>
  <div class="font-poppins">
    <!-- Hero Section -->
    <section class="hero bg-pink-600 mt-1 text-white text-center py-5">
      <div class="container">
        <h1>Welcome to the World of Motors</h1>
        <p>
          Your one-stop destination for everything related to cars, bikes, and
          motorsports!
        </p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="introduction py-5">
      <div class="container">
        <h2 class="text-center mb-4">About Motors</h2>
        <p>
          Motors have always been at the forefront of technological
          advancements. From the early days of carriages powered by steam
          engines to the latest electric vehicles, the world of motors is
          fast-paced and ever-evolving. Whether you're into high-speed racing or
          eco-friendly electric cars, there's something for everyone in the
          world of motors!
        </p>
      </div>
    </section>

    <!-- Featured Motors Section -->
    <section class="featured-motors py-5">
      <div class="container">
        <h2 class="text-center mb-4">Featured Motors</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="motor in motors" :key="motor.id">
            <div class="card">
              <img :src="motor.image" class="card-img-top" :alt="motor.name" />
              <div class="card-body text-center">
                <h5 class="card-title">{{ motor.name }}</h5>
                <p class="card-text">{{ motor.description }}</p>
                <router-link :to="motor.link" class="btn bg-pink-600 text-light"
                  >View More</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 MotorsWorld | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
import Tesla from '../components/Tesla.vue';

export default {
    components:{
        Tesla
    },
  data() {
    return {
      motors: [
        {
          id: 1,
          name: "Tesla Model S",
          description:
            "An electric car with top-notch performance and sustainability.",
          image:
            "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",
          link: "/Tesla", // Link to detailed page about this motor
        },
        {
          id: 2,
          name: "Yamaha YZF-R1",
          description: "A high-performance motorcycle for racing enthusiasts.",
          image:
            "https://i.pinimg.com/736x/ff/d7/de/ffd7decb5dc09c0ea14ad99e3b20b7bc.jpg",
          link: "/YZFR1", // Link to detailed page about this motorcycle
        },
        {
          id: 3,
          name: "Formula 1 Racing",
          description:
            "The pinnacle of motorsports, featuring the fastest cars and top drivers.",
          image:
            "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2023/McLaren/Formula%201%20header%20template%20(35)",
          link: "/Formula1", // Link to detailed motorsport page
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  background: url("https://via.placeholder.com/1200x400?text=Motors+Intro")
    no-repeat center center;
  background-size: cover;
}

.introduction p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.featured-motors .card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%; /* Set a fixed width */
  height: 300px; /* Set a fixed height */
  object-fit: cover; /* Ensures the image fills the area without distortion */
  border-radius: 8px; /* Optional: Adds rounded corners */
}

footer {
  background-color: #222;
}
</style>
