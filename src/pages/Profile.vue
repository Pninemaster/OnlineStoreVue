<template>
  <div class="container mt-4 font-poppins">
    <!-- Profile Card -->
    <div class="container mt-4">
      <div class="row">
        <!-- Profile Picture -->
        <div class="col-md-4">
          <div class="card" style="width: 18rem">
            <img :src="user.photo" class="card-img-top" alt="User Photo" />
          </div>
        </div>

        <!-- Profile Info -->
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Name:{{ user.name }}</h5>
            <p class="card-text">Email: {{ user.email }}</p>
            <p class="card-text">Phone: {{ user.phone }}</p>
            <button class="btn bg-pink-600 text-light" @click="editProfile">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile Edit Modal -->
    <div
      v-if="isEditing"
      class="modal fade show"
      tabindex="-1"
      style="display: block"
      aria-modal="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Profile</h5>
            <button type="button" class="btn-close" @click="closeEdit"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProfile">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="editableProfile.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="editableProfile.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="photo" class="form-label">Profile Photo URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="photo"
                  v-model="editableProfile.photo"
                />
              </div>
              <button type="submit" class="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <!-- Account Stats -->
    <div class="mt-4">
      <h3>Account Stats</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Spent</h5>
              <p class="card-text">${{ user.totalSpent }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Orders</h5>
              <p class="card-text">{{ user.orders.length }} Orders</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Active Cart</h5>
              <p class="card-text">{{ user.cart.length }} Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <!-- Order History -->
    <div class="mt-4">
      <h3>Order History</h3>
      <div v-if="loadingOrders" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <table class="table table-striped" v-else>
        <thead>
          <tr>
            <th>Date</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in paginatedOrders" :key="order.id">
            <td>{{ order.date }}</td>
            <td>{{ order.id }}</td>
            <td>{{ order.status }}</td>
            <td>${{ order.total }}</td>
            <td>
              <button class="btn bg-pink-700 text-light" @click="viewOrderDetails(order.id)">
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div v-if="user.orders.length > itemsPerPage" class="pagination">
        <button
          class="btn bg-pink-600 text-light m-2"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          Previous
        </button>
        <button
          class="btn bg-pink-700 text-light m-2"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </div>
    </div>

    <hr>
    <!-- Cart Items -->
    <div class="mt-4">
      <h3>Cart</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in user.cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              <input
                type="number"
                v-model="item.quantity"
                min="1"
                class="form-control"
              />
            </td>
            <td>${{ item.price }}</td>
            <td>${{ item.quantity * item.price }}</td>
            <td>
              <button class="btn btn-danger" @click="removeFromCart(item.id)">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: {
        name: "Phin Punleu",
        photo:
          "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        email: "punleu@gmail.com",
        phone: "(123) 456-7890",
        totalSpent: 2300,
        orders: [
          { id: "ORD001", date: "2025-01-05", status: "Delivered", total: 200 },
          { id: "ORD002", date: "2025-01-10", status: "Shipped", total: 450 },
          { id: "ORD003", date: "2025-01-15", status: "Pending", total: 150 },
        ],
        cart: [
          { id: 1, name: "Wireless Headphones", quantity: 1, price: 120 },
          { id: 2, name: "Smartwatch", quantity: 2, price: 150 },
        ],
      },
      editableProfile: {
        name: "",
        email: "",
        photo: "",
      },
      isEditing: false,
      loadingOrders: false,
      currentPage: 1,
      itemsPerPage: 2,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.user.orders.length / this.itemsPerPage);
    },
    paginatedOrders() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.user.orders.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    editProfile() {
      this.editableProfile = { ...this.user }; // Copy user data to editable profile
      this.isEditing = true;
    },
    closeEdit() {
      this.isEditing = false;
    },
    updateProfile() {
      this.user = { ...this.editableProfile }; // Save the updated profile
      this.isEditing = false;
    },
    viewOrderDetails(orderId) {
      alert(`Viewing details for order: ${orderId}`);
    },
    removeFromCart(itemId) {
      this.user.cart = this.user.cart.filter((item) => item.id !== itemId); // Remove item from cart
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
  mounted() {
    // Simulating API call for user data
    setTimeout(() => {
      this.loadingOrders = false;
    }, 1000);
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
}

.card {
  margin-bottom: 1rem;
}

.table {
  margin-top: 2rem;
}

.pagination {
  margin-top: 1rem;
}
</style>
