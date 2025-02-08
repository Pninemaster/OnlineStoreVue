<template>
  <div class="container py-5 font-poppins">
    <div class="row">
      <!-- Contact Form -->
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Enter your Name</label>
            <input type="text" class="form-control border-2 border-danger-subtle" id="name" placeholder="Enter your Name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Enter a valid email address</label>
            <input
              type="email"
              class="form-control border-2 border-danger-subtle"
              id="email"
              placeholder="Enter a valid email address"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Enter your message</label>
            <textarea
              class="form-control border-2 border-danger-subtle"
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button class="hvr-shutter-out-horizontal " style="color: white; border: none;">
            Submit
          </button>
        </form>
      </div>
      <!-- Contact Information -->
      <div class="col-md-6">
        <div class="p-3 bg-light rounded">
          <h5 class="mb-3">CALL US</h5>
          <p>1 (234) 567-891</p>
          <p>1 (234) 987-654</p>
          <h5 class="mt-4">LOCATION</h5>
          <p>121 Rock Street, 21 Avenue,</p>
          <p>New York, NY 92103-9000</p>
          <h5 class="mt-4">BUSINESS HOURS</h5>
          <p>Mon - Fri: 10 am - 8 pm</p>
          <p>Sat, Sun: Closed</p>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="text-center mt-5">
      <h4>GET IN TOUCH</h4>
      <p>Hey! We are looking forward to start a project with you!</p>
      <p>
        Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora
        torquent per conubia! Maecenas gravida lacus.
      </p>
      <div class="d-flex justify-content-center gap-3">
        <a href="#" class="text-decoration-none">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#" class="text-decoration-none">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="#" class="text-decoration-none">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#" class="text-decoration-none">
          <i class="bi bi-telegram"></i>
        </a>
        <a href="#" class="text-decoration-none">
          <i class="bi bi-youtube"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
button {
  font-size: 18px;
  padding: 15px 25px;
  cursor: pointer;
  background-color: #ed07a5; /* Set initial background color to blue */
  color: white;
  border: none;
  transition: background-color 0.3s, color 0.3s;
}

h4 {
  color: #d35494;
}

p {
  color: #555;
}

.btn-primary {
  background-color: #d35494;
  border-color: #d35494;
}

.btn-primary:hover {
  background-color: #c14586;
  border-color: #c14586;
}
</style>
  