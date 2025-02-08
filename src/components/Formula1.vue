<template>
  <div>
    <!-- Hero Section -->
    <section
      class="hero mt-1 text-white text-center py-5 font-poppins"
      style="
      width: 100%;
      height: 500px;
      object-fit: cover;
      background-image: url(https://www.formula1.com/content/dam/fom-website/manual/Misc/2021manual/2022-car-with-2021-liveries/F1_2022_RedBull_i5_3_4_Right.jpg);"
    >
      <div class="container">
        <h1>Formula 1</h1>
        <p>The fastest and most exciting motorsport in the world.</p>
      </div>
    </section>

    <!-- Formula 1 Overview Section -->
    <section class="intro py-5">
      <div class="container">
        <h2 class="text-center mb-4">What is Formula 1?</h2>
        <p>
          Formula 1 (F1) is the highest class of international single-seater
          auto racing. It features the world’s most advanced racing cars and the
          best drivers, competing in a global series of Grand Prix events. With
          its rich history and technological innovations, Formula 1 is the
          ultimate test of speed, precision, and strategy.
        </p>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="features py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Key Features of Formula 1</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="feature-card text-center">
              <img
                src="https://i.ytimg.com/vi/tnDHM2XZ6AI/maxresdefault.jpg"
                alt="Advanced Aerodynamics"
                class="feature-image mb-3"
              />
              <h4>Advanced Aerodynamics</h4>
              <p>
                F1 cars feature cutting-edge aerodynamics for maximum downforce,
                speed, and cornering ability on the track.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-card text-center">
              <img
                src="https://www.formula1.com/fom-website/2023/Miscellaneous/Driver-of-the-Year-(Voted-by-TPs)-16x9.jpg"
                alt="Top Teams & Drivers"
                class="feature-image mb-3"
              />
              <h4>Top Teams & Drivers</h4>
              <p>
                Formula 1 showcases the world’s best drivers and teams, such as
                Mercedes, Ferrari, and Red Bull Racing.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-card text-center">
              <img
                src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/manual/Misc/WeRaceAsOne/Hero%2016-9%20F1%20KV%20Assets"
                alt="Global Races"
                class="feature-image mb-3"
              />
              <h4>Global Races</h4>
              <p>
                The F1 season consists of 20+ races across the globe, from
                Monaco to Singapore and Abu Dhabi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teams Section -->
    <section class="teams py-5">
      <div class="container">
        <h2 class="text-center mb-4">Formula 1 Teams</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="team in f1Teams" :key="team.id">
            <div class="team-card text-center">
              <img :src="team.logo" alt="team.name" class="team-logo mb-3" />
              <h4>{{ team.name }}</h4>
              <p>{{ team.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section class="history py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">The History of Formula 1</h2>
        <p>
          Formula 1 was first established in 1950 and has since become the most
          prestigious form of motorsport. Over the years, F1 has evolved with
          technological advancements, making it not just a sport, but also a
          showcase of the latest innovations in automotive engineering. The
          series has witnessed legendary drivers, such as Michael Schumacher,
          Ayrton Senna, and Lewis Hamilton, who have all left an indelible mark
          on the sport.
        </p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery py-5">
      <div class="container">
        <h2 class="text-center mb-4">Formula 1 Gallery</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <img
              src="https://eu-images.contentstack.com/v3/assets/blt8770191dea35bccc/blt2f7ca3d4cbd3f26a/64d3e9621844683f3733f44a/Formula_1_Exhibition_-_Design_Lab_AlphaTauri_AT01_Pierre_Gasly_winning_car_from_2020_Italian_Grand_Prix_at_Monza.jpg"
              class="img-fluid"
              alt="Formula 1 car"
            />
          </div>
          <div class="col-md-4 mb-4">
            <img
              src="https://media.f1exhibition.com/app/uploads/2024/08/20134555/DSC01712.jpg"
              class="img-fluid"
              alt="Formula 1 team"
            />
          </div>
          <div class="col-md-4 mb-4">
            <img
              src="https://www.presight.ai/wp-content/uploads/2024/04/MicrosoftTeams-image-23-1.png"
              class="img-fluid"
              alt="Formula 1 race"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section
      class="cta py-5 text-white text-center"
      style="background-color: #222"
    >
      <div class="container">
        <h2>Experience the Thrill of Formula 1</h2>
        <p>
          Watch the fastest drivers and most powerful machines race around the
          world’s most iconic circuits.
        </p>
        <a href="https://www.formula1.com" target="_blank" class="btn btn-light"
          >Visit Official F1 Website</a
        >
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 Formula 1 | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Formula1Page",
  data() {
    return {
      f1Teams: [
        {
          id: 1,
          name: "Mercedes",
          description:
            "Mercedes-AMG Petronas Formula One Team, the dominant force in recent years.",
          logo: "https://www.chromethemer.com/download/hd-wallpapers/formula-1-mercedes-3840x2160.jpg",
        },
        {
          id: 3,
          name: "Red Bull Racing",
          description:
            "Red Bull Racing, known for its exciting and innovative approach to racing.",
          logo: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/RedBullRB18/SI202202090260_hires_jpeg_24bit_rgb.jpg",
        },
        {
          id: 3,
          name: "Ferrari",
          description:
            "Scuderia Ferrari, the oldest and most successful team in Formula 1 history.",
          logo: "https://i.ytimg.com/vi/kZvDRlL1xQQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gEygbMA8=&rs=AOn4CLAZ_36hFkJRcR4t8AvvCovB_AchOg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  background: url("https://www.formula1.com/content/fom-website/en/latest/headlines/2020/11/formula-1-f1-logo-cars-track/_jcr_content/image/related/mercedes.jpg")
    no-repeat center center;
  background-size: cover;
}

.feature-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.feature-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.team-logo {
  width: 100%;
  height: 250px;
  object-fit: contain;
}

.cta {
  background-color: #222;
  padding: 40px 20px;
}

footer {
  background-color: #111;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
