<template>
  <nav class="sticky-navbar navbar navbar-expand-lg bg-pink-700 font-poppins">
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <!-- Logo -->
      <router-link to="/home" class="navbar-brand text-light">Logo</router-link>

      <!-- Navigation Links (Hidden on Mobile) -->
      <div class="collapse navbar-collapse" id="navbarNav" style="margin-left: 150px;">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link text-light"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/fashion" class="nav-link text-light"
              >Fashion</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link text-light"
              >Electronics</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/sports" class="nav-link text-light"
              >Sports</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/motors" class="nav-link text-light"
              >Motors</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contacts" class="nav-link text-light"
              >Contact Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link text-light"
              >Profile</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Search, Cart, and Menu Icon (Mobile & Desktop) -->
      <div class="icons-container d-flex align-items-center">
        <!-- Search Icon (Mobile) -->
        <button
          v-if="!showSearch"
          class="btn text-light border-0 search-icon"
          @click="toggleSearch"
        >
          <i class="bi bi-search"></i>
        </button>

        <!-- Search Input (Expands in Mobile) -->
        <form
          v-if="showSearch || isDesktop"
          class="d-flex flex-grow-0 justify-content-center search-form"
        >
          <div class="input-group">
            <input
              class="form-control border-0 shadow-none search-input"
              type="search"
              placeholder="Search"
            />
            <span class="input-group-text bg-light border-0">
              <i class="bi bi-search"></i>
            </span>
          </div>
        </form>

        <!-- Shopping Cart -->
        <button class="btn text-light border-light cart-button">
          <i class="bi bi-cart"></i>
        </button>

        <!-- Menu Icon -->
        <button class="btn text-light border-0 menu-icon" @click="toggleMenu">
          <i class="bi bi-list"></i>
          <!-- Bootstrap List Icon (☰) -->
        </button>
      </div>
    </div>
  </nav>

  <!-- Sidebar Menu -->
  <div class="sidebar" :class="{ 'sidebar-open': showMenu }">
    <button class="close-btn" @click="toggleMenu">&times;</button>
    <ul>
      <li><router-link to="/home" @click="toggleMenu">Home</router-link></li>
      <li>
        <router-link to="/fashion" @click="toggleMenu">Fashion</router-link>
      </li>
      <li>
        <router-link to="/product" @click="toggleMenu">Electronics</router-link>
      </li>
      <li>
        <router-link to="/sports" @click="toggleMenu">Sports</router-link>
      </li>
      <li>
        <router-link to="/motors" @click="toggleMenu">Motors</router-link>
      </li>
      <li>
        <router-link to="/contacts" @click="toggleMenu">Contact Us</router-link>
      </li>
      <li>
        <router-link to="/profile" @click="toggleMenu">Profile</router-link>
      </li>
    </ul>
  </div>

  <!-- Sidebar Overlay -->
  <div v-if="showMenu" class="sidebar-overlay" @click="toggleMenu"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showSearch = ref(false);
const showMenu = ref(false);
const isDesktop = ref(window.innerWidth >= 992);

// Function to toggle search bar visibility
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

// Function to toggle sidebar menu
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

// Function to check screen size for desktop mode
const checkScreenSize = () => {
  isDesktop.value = window.innerWidth >= 992;
};

// Listen for window resize
onMounted(() => {
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<style scoped>
.navbar-nav {
  width: 100%; /* Ensures full width for centering */
  display: flex;
  justify-content: center; /* Centers the items */
}

/* Sticky Navbar */
.sticky-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

/* Navbar Links Hover */
.nav-link:hover {
  color: #ff2ecc;
  text-decoration: underline;
}

/* Icons Container (Align Items in One Row) */
.icons-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Ensures only 10px margin between search, cart & menu */
}

/* Search Input (Shrunk for Menu Space) */
.search-input {
  width: 120px; /* Reduced width to fit menu icon */
}

/* Search Icon (Hidden on Desktop) */
.search-icon {
  display: none;
}

/* Menu Icon */
.menu-icon {
  font-size: 1.5rem;
}

/* Sidebar Menu */
.sidebar {
  position: fixed;
  top: 0;
  right: -250px; /* Initially hidden */
  width: 250px;
  height: 100%;
  background: #ff2ecc;
  transition: right 0.3s ease-in-out;
  padding-top: 50px;
  z-index: 1100;
}

.sidebar-open {
  right: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  padding: 15px;
  text-align: center;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  display: block;
}

.sidebar ul li a:hover {
  background: #b00b87;
}

/* Sidebar Close Button */
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Sidebar Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1099;
}

/* Responsive styles */
@media (max-width: 991px) {
  /* Hide navigation links on mobile */
  #navbarNav {
    display: none !important;
  }

  /* Show search icon */
  .search-icon {
    display: block;
    font-size: 1.5rem;
  }

  /* Show search bar when toggled */
  .search-container .search-form {
    display: flex !important;
  }
}

.search-form {
  max-width: 190px; /* Adjust width to fit properly */
}

/* Shopping Cart Button */
.cart-button:hover {
  background-color: #b00b87;
}

@media (min-width: 992px) {
  .sidebar {
    display: none !important; /* Hides sidebar in PC mode */
  }
  .menu-icon {
    display: none !important; /* Hides menu icon in PC mode */
  }
}
</style>