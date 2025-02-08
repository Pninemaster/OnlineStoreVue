<template>
  <div>
    <!-- Hero Section -->
    <section class="hero mt-1 text-white text-center py-5 font-poppins"
      style="
      width: 100%;
      height: 600px;
      object-fit: cover;
      background-image: url(https://images.unsplash.com/photo-1536700503339-1e4b06520771?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGElMjBtb2RlbCUyMHN8ZW58MHx8MHx8fDA%3D);">
      <div class="container">
        <h1>Tesla Model S</h1>
        <p>Revolutionizing the way we think about electric vehicles.</p>
      </div>
    </section>

    <!-- Tesla Introduction Section -->
    <section class="intro py-5">
      <div class="container">
        <h2 class="text-center mb-4">Tesla Model S Overview</h2>
        <p>
          The Tesla Model S is a full-sized electric luxury sedan that delivers
          incredible performance and cutting-edge technology. Designed for
          maximum efficiency, style, and sustainability, the Model S continues
          to set the benchmark for electric cars worldwide.
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Key Features</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="feature-card text-center">
              <img
                src="https://cdn-ds.com/blogs-media/sites/601/2022/04/06140926/2021-Tesla-Model-S_o.jpg"
                alt="Performance"
                class="feature-image mb-3"
              />
              <h4>Unmatched Performance</h4>
              <p>
                Accelerates from 0 to 60 mph in just 1.99 seconds, making it the
                fastest electric car in the world.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-card text-center">
              <img
                src="https://themanufacturer-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2015/10/14121246/Telsa-Autopilot-was-deployed-yesterday-to-its-Model-S-vehicles.-Image-courtesy-of-Tesla-Motors..jpg"
                alt="Autopilot"
                class="feature-image mb-3"
              />
              <h4>Autopilot</h4>
              <p>
                Drive with autopilot capabilities and enjoy the convenience of
                semi-autonomous driving.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-card text-center">
              <img
                src="https://electrek.co/wp-content/uploads/sites/3/2018/08/Screen-Shot-2018-08-06-at-12.57.08-PM-e1533574707700.jpg?quality=82&strip=all"
                alt="Design"
                class="feature-image mb-3"
              />
              <h4>Sleek Design</h4>
              <p>
                Elegant and futuristic design with aerodynamic efficiency that
                stands out on the road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specifications Section -->
    <center>
      <section class="specs py-5">
        <div class="container">
          <h2 class="text-center mb-4">Tesla Model S Specifications</h2>
          <div class="row">
            <div class="col-md-6">
              <h4>Performance</h4>
              <ul>
                <li>Top Speed: 200 mph</li>
                <li>0-60 mph: 1.99 seconds</li>
                <li>Horsepower: 1,020 hp</li>
              </ul>
            </div>
            <div class="col-md-6">
              <h4>Battery & Range</h4>
              <ul>
                <li>Battery: 100 kWh</li>
                <li>Range: 390 miles (Long Range)</li>
                <li>Charging: Supercharging network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </center>

    <!-- Image Gallery Section -->
    <section class="gallery py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Tesla Model S Gallery</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <img
              src="https://cars.usnews.com/static/images/Auto/custom/15204/2023_Tesla_Model_S_13.jpg"
              class="img-fluid"
              alt="Tesla Model S Front"
            />
          </div>
          <div class="col-md-4 mb-4">
            <img
              src="https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/1220000/0/1220093.jpg"
              class="img-fluid"
              alt="Tesla Model S Interior"
            />
          </div>
          <div class="col-md-4 mb-4">
            <img
              src="https://www.usnews.com/object/image/0000018d-a43b-d099-a39d-f6bbf1390000/models-84.jpg?update-time=1707857407619&size=responsive640"
              class="img-fluid"
              alt="Tesla Model S Side"
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
        <h2>Ready to Experience the Future of Driving?</h2>
        <p>
          Schedule a test drive today and discover the unmatched performance of
          the Tesla Model S.
        </p>
        <a
          href="https://www.tesla.com/testdrive"
          target="_blank"
          class="btn btn-light"
          >Schedule a Test Drive</a
        >
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 Tesla | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TeslaPage",
};
</script>

<style scoped>
.hero {
  background: url("https://www.tesla.com/sites/default/files/curated_media/model_s_cars.jpg")
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

.specs ul {
  list-style-type: none;
  padding: 0;
}

.specs ul li {
  margin-bottom: 10px;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.cta {
  background-color: #222;
  padding: 40px 20px;
}

footer {
  background-color: #111;
}
</style>
