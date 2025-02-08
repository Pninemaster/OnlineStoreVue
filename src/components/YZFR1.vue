<template>
  <div class="font-poppins">
    <!-- Hero Section -->
    <section class="hero mt-1 text-white text-center py-5 font-poppins"
      style="
      width: 100%;
      height: 700px;
      object-fit: cover;
      background-image: url(https://japan.webike.net/magazine/wp-content/uploads/2022/10/cp195_realize_yzf-r1_01.jpg);">
      <div class="container">
        <h1 class="mt-5">Yamaha YZF-R1</h1>
        <p>The pinnacle of sportbike performance and technology.</p>
      </div>
    </section>

    <!-- YZF-R1 Introduction Section -->
    <section class="intro py-5">
      <div class="container">
        <h2 class="text-center mb-4">Yamaha YZF-R1 Overview</h2>
        <p>
          The Yamaha YZF-R1 is a high-performance, flagship sportbike designed
          for speed, precision, and agility. Combining cutting-edge technology
          with Yamaha’s renowned engineering, the R1 is built to conquer both
          the road and track.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqn1_a7_-6p9_bNzqSn4GUW0KV9rxYd_d1GQ&s"
                alt="Crossplane Engine"
                class="feature-image mb-3"
              />
              <h4>Crossplane Engine</h4>
              <p>
                Powerful 998cc, crossplane engine designed for unmatched power
                delivery and responsiveness.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-card text-center">
              <img
                src="https://www.cyclenews.com/wp-content/uploads/2019/07/20_YZF-R1M_Carbon-Fiber-Liquid-Metal_Details02_0023.jpg"
                alt="Advanced Electronics"
                class="feature-image mb-3"
              />
              <h4>Advanced Electronics</h4>
              <p>
                Features like ride-by-wire throttle, adjustable traction
                control, and cornering ABS for optimal control.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-card text-center">
              <img
                src="https://tstindustries.com/images/D/Zero-Gravity-Windscreens-Yamaha-YZF-R1-2020+_Detailed-Image-3.jpg"
                alt="Aerodynamic Design"
                class="feature-image mb-3"
              />
              <h4>Aerodynamic Design</h4>
              <p>
                Designed with superior aerodynamics to improve stability and
                reduce drag for track and road performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specifications Section -->
    <section class="specs py-5">
      <div class="container">
        <h2 class="text-center mb-4">YZF-R1 Specifications</h2>
        <div class="row">
          <div class="col-md-6">
            <h4>Performance</h4>
            <ul>
              <li>Engine: 998cc 4-cylinder, liquid-cooled</li>
              <li>Power: 200 HP</li>
              <li>Torque: 112.4 Nm</li>
              <li>Top Speed: 186 mph</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h4>Handling</h4>
            <ul>
              <li>Suspension: KYB front and rear suspension</li>
              <li>Brakes: Dual 320mm front discs, 220mm rear disc</li>
              <li>Weight: 199 kg</li>
              <li>Seat Height: 855 mm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Gallery Section -->
    <section class="gallery py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">YZF-R1 Gallery</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/035/694/649/small_2x/ai-generated-biking-into-the-dusk-motorcycle-rider-on-the-road-at-sunset-photo.jpg"
              class="img-fluid"
              alt="YZF-R1 Front"
            />
          </div>
          <div class="col-md-4 mb-4">
            <img
              src="https://data.3dtuning.com/tun/92xA384yAW.jpg"
              class="img-fluid"
              alt="YZF-R1 Side"
            />
          </div>
          <div class="col-md-4 mb-4">
            <img
              src="https://assets.carandclassic.com/uploads/cars/yamaha/C1792654/1997-yamaha-yzf-r1-670e8081d7abf.jpg?fit=fillmax&h=800&ixlib=php-4.1.0&q=85&w=800&s=4a186efdcd2194ab17b9bf5ae0f08a05"
              class="img-fluid"
              alt="YZF-R1 Rear"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section
      class="cta py-5 text-light text-center"
      style="background-color: #222"
    >
      <div class="container">
        <h2>Take Your Ride to the Next Level</h2>
        <p>
          Get behind the handlebars of the Yamaha YZF-R1. Experience ultimate
          performance and precision.
        </p>
        <a
          href="https://www.yamaha-motor.com"
          target="_blank"
          class="btn btn-light"
          >Learn More & Buy Now</a
        >
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 Yamaha | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "YZFR1Page",
};
</script>

<style scoped>
.hero {
  background: url("https://www.yamaha-motor.com.sg/wp-content/uploads/2020/02/YZF-R1_Photo_7.jpg")
    no-repeat center center;
  background-size: cover;
}

.feature-image {
  width: 100%;
  height: 250px;
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
