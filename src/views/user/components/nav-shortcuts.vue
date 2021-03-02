<template>
  <div class="quick_shortcuts">
    <div class="quick_shortcuts_title">
      <p>Quick</p>
      <p>Shortcuts</p>
    </div>
    <div class="quick_shortcuts_links">
      <router-link v-for="link in shortcuts" :key="link.imgUrl" to="">
        <img :src="require(`@/assets/dashboard/${link.imgUrl}.svg`)" alt="" />
        <p>{{ link.titleEn }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shortcuts: [
        {
          titleEn: "My Profile",
          titleFr: "",
          imgUrl: "profile",
          path: ""
        },
        {
          titleEn: "Recharge",
          titleFr: "",
          imgUrl: "recharge",
          path: ""
        },
        {
          titleEn: "Calls Log",
          titleFr: "",
          imgUrl: "calls_logs",
          path: ""
        },
        {
          titleEn: "Bundels",
          titleFr: "",
          imgUrl: "bundels",
          path: ""
        },
        {
          titleEn: "Recharge Logs",
          titleFr: "",
          imgUrl: "recharge_logs",
          path: ""
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.quick_shortcuts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
  & *{
      text-transform: capitalize;
  }

  &_title {
    p {
      font-size: 36px;
      margin-bottom: 0;
    }
    p:first-of-type {

    }
    p:last-of-type {
      font-weight: bold;
    }
  }

  &_links {
    width: 60%;
    display: flex;
    justify-content: space-between;

    & a {
      text-align: center;
      img {
        max-width: 80px;
        max-height: 80px;
        margin-bottom: 10px;
      }
      p {
        font-size: 18px;
        font-weight: 500;
        color: #000;
      }
    }
  }
}
</style>
