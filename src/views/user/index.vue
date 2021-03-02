<template>
  <div class="user_module">
    <!-- Module shortcuts -->
    <Shortcuts></Shortcuts>
    <!-- Module shortcuts -->
    <div class="wrapper">
      <!-- modaule side menu -->
      <section>
        <SideMenu></SideMenu>
      </section>
      <!-- modaule side menu -->

      <!-- modaule router view -->
      <section class="routable_content">
        <router-view />
      </section>
      <!-- modaule router view -->
    </div>
  </div>
</template>
<script>
import SideMenu from "./components/sidemenu";
import Shortcuts from "./components/nav-shortcuts";
export default {
  components: { SideMenu, Shortcuts }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.routable_content{
  padding: 0 30px;
  flex: 1;
}
</style>
