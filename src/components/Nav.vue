<template>
  <b-navbar toggleable="sm">
    <b-navbar-brand href="#">
      <img
        src="@/assets/common/malitel-logo.png"
        width="109"
        height="109"
        alt="Malitel Logo"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="m-auto external_links">
        <b-nav-item-dropdown text="Discover Malitel">
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Shop Services">
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Businesses">
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto user_avatar">
        <span right>
          <img
            src="@/assets/common/user.png"
            width="50"
            height="50"
            alt="user image"
          />
        </span>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <span class="d-block">signin</span>
            <strong>My Account</strong>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      externalLinks: []
    };
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 110px;
  padding: 0.5rem 0rem;
}
.external_links {
}
</style>
