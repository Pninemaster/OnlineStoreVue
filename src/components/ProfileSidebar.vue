<template>
  <div class="d-flex flex-column vh-100 bg-light p-3 font-poppins">
    <h2 class="text-primary">Kinetik</h2>
    <ul class="nav flex-column">
      <li class="nav-item" v-for="item in menuItems" :key="item.name">
        <a class="nav-link" :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileSidebar",
  data() {
    return {
      menuItems: [
        { name: "New Trip", link: "#" },
        { name: "Trips", link: "#" },
        { name: "Patients", link: "#" },
        { name: "Reports", link: "#" },
      ],
    };
  },
};
</script>

<style>
.nav-link {
  color: #333;
}
.nav-link:hover {
  color: #007bff;
}
</style>
