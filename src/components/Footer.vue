<template>
  <footer>
    <div class="footer_column">
      <h3>Services</h3>
      <b-nav vertical>
        <b-nav-item
          v-for="(link, index) in services"
          :key="index + link.title"
          :href="link.path"
        >
          {{ link.title }}
        </b-nav-item>
      </b-nav>
    </div>
    <div class="footer_column">
      <h3>Support</h3>
      <b-nav vertical>
        <b-nav-item
          v-for="(link, index) in support"
          :key="index + link.title"
          :href="link.path"
          >{{ link.title }}</b-nav-item
        >
      </b-nav>
    </div>
    <div class="footer_column">
      <h3>How We Role</h3>
      <b-nav vertical>
        <b-nav-item
          v-for="(link, index) in howWeRole"
          :key="index + link.title"
          :href="link.path"
          >{{ link.title }}</b-nav-item
        >
      </b-nav>
    </div>
    <div class="footer_column">
      <h3>Malitel community</h3>
      <p>
        Get qualified proposals within 24 hours. Compare bids, reviews, and
        prior work. Interview favorites and hire the best fit.
      </p>
      <section class="newsletter">
        <div>
          <p>Subscribe to our newsletter</p>
          <span class="d-block">newsletter@bluecrunch.com</span>
        </div>
        <button>
          Subscribe
        </button>
      </section>
      <section class="social">
        <img src="@/assets/common/facebook.png" alt="">
        <img src="@/assets/common/twitter.png" alt="">

      </section>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { title: "Home Internet", path: "" },
        { title: "Business Solutions ", path: "" },
        { title: "Blog", path: "" }
      ],
      support: [
        { title: "Contact", path: "" },
        { title: "F&Q", path: "" },
        { title: "Help Center", path: "" }
      ],
      howWeRole: [
        { title: "Privacy and policy", path: "" },
        { title: "Terms and condtions", path: "" },
        { title: "Copyright policy", path: "" },
        { title: "Finantial policy", path: "" },
        { title: "Trust & safty", path: "" },
        { title: "Code of conduct", path: "" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
footer {
  background-color: $theme_color;
  display: flex;
  flex-wrap: wrap;
  padding: 100px 105px;
  & > div:not(:last-child) {
    width: 20%;
  }
  & > div:last-child {
    flex: 1;
  }

  .footer_column {
    h3 {
      font-size: 24px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 50px;
    }
    .nav-link,
    p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.5);
      padding: 0.5rem 0rem;
    }
    .nav-link {
      display: block;
    }
  }

  .newsletter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    border: solid 1px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.04);
    padding: 25px 1rem;
    & > div {
      p {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      span {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    & > button {
      width: 170px;
      height: 50px;
      border-radius: 15px;
      background-color: $theme_color_secondary;
      border: none;
      color: #fff;
    }
  }
  .social{
    margin-top: 30px;
    & img:last-of-type{
      margin: 0 1rem;
    }
  }
}
</style>
