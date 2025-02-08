<template>
  <div class="font-poppins">
    <!-- Hero Section -->
    <section class="hero bg-pink-600 text-white text-center mt-1 py-5">
      <div class="container">
        <h1>Welcome to SportsHub</h1>
        <p>Your one-stop destination for all sports news and updates!</p>
      </div>
    </section>

    <!-- Featured Sports Categories -->
    <section class="categories py-5">
      <div class="container">
        <h2 class="text-center mb-4">Featured Sports</h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="category in sportsCategories"
            :key="category.id"
          >
            <div class="card">
              <img
                :src="category.image"
                class="card-img-top"
                :alt="category.name"
              />
              <div class="card-body text-center">
                <h5 class="card-title">{{ category.name }}</h5>
                <p class="card-text">{{ category.description }}</p>
                <a :href="category.link" class="btn bg-pink-600 text-light">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 SportsHub | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sportsCategories: [
        {
          id: 1,
          name: "Football",
          description: "Hudson organizes football tournament in celebration of the start of Euro 2025",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnlI57ovb7MrhZpMzrCq0dQtRoZpbNngJqQ&s",
          link: "/football",
        },
        {
          id: 2,
          name: "Basketball",
          description: "New start date for 2025 All Native Basketball Tournament - The Smithers Interior News",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SIhIwS6OVHrGIRa_G_G_kMIg3xktu0I4WQ&s",
          link: "/basketball",
        },
        {
          id: 3,
          name: "Tennis",
          description: "Tennis News, Videos, Players, and Results - ATP, WTA, US Open, Grand Slam",
          image:
            "https://www.sportsnet.ca/wp-content/uploads/2020/11/Big-Read-PTPA-Polansky.jpg",
          link: "/Tennis",
        },
        {
          id: 4,
          name: "Karate",
          description: "An Examination of the Upcoming Karate Championship Qualification and Competition",
          image:
            "https://media.istockphoto.com/id/528724247/photo/two-professional-female-karate-fighters-are-fighting.jpg?s=612x612&w=0&k=20&c=sTvxiUiTHwI9pXKciTakSu5K43OjwEmUyyozo9D006Y=",
          link: "/Karate",
        },
        {
          id: 5,
          name: "Taekwondo",
          description: "China's Zhao Shuai retains title at taekwondo worlds",
          image:
            "https://lh6.googleusercontent.com/proxy/ObWq_GjVjU70tMQlYnUHanKTFXIZEFJl_HzbARacqvL0kjZlkKEhsXhiVp3rGea5C1wpzMQBw0JkS-e3P1v0-CwsEJTY7MYmjQW9P56Z_SFoTbl00OkxT32fCMo",
          link: "/Taekwondo",
        },
        {
          id: 6,
          name: "Boxing",
          description: "IBA welcomes everyone to its portfolio of new flagship events regardless of National Federations...",
          image:
            "https://www.iba.sport/wp-content/uploads/2023/07/Flagship-events.jpg",
          link: "/Boxing",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  background: url("https://via.placeholder.com/1200x400") no-repeat center
    center;
  background-size: cover;
}

.categories .card,
.latest-news .card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%; /* Ensure it fills the container */
  height: 200px; /* Fixed height */
  object-fit: cover; /* Maintain aspect ratio */
}

footer {
  background-color: #222;
}
</style>
