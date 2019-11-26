<template>
  <b-navbar toggleable="sm">
    <b-navbar-toggle target="header-collapse"></b-navbar-toggle>

    <b-collapse id="header-collapse" is-nav>
      <b-navbar-nav class="external_Links">
        <b-nav-item
          v-for="(link, index) in externalLinks"
          :key="index + link.path"
          :href="link.path"
          >{{ link.titleEn }}</b-nav-item
        >
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav class="locales">
          <button
            v-for="(locale, index) in locales"
            :key="index + locale.id"
            :class="locale.id === currentLocale ? 'current_locale' : ''"
          >
            {{ locale.title }}
          </button>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      externalLinks: [
        {
          titleEn: "E-bill",
          titleFr: "dd",
          path: ""
        },
        {
          titleEn: "Client Area",
          titleFr: "dd",
          path: ""
        },
        {
          titleEn: "Assistance",
          titleFr: "dd",
          path: ""
        },
        {
          titleEn: "Contact",
          titleFr: "dd",
          path: ""
        }
      ],
      locales: [
        { id: "en", title: "English" },
        { id: "fr", title: "French" }
      ]
    };
  },
  computed: {
    currentLocale() {
      return "en";
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  background: $theme_color_secondary;
  a,
  button {
    font-size: 14px;
  }
  .external_Links {
    .nav-link {
      color: #fff;
    }
  }
  .locales {
    button {
      background: none;
      color: #ffffff;
      opacity: 0.6;
      border: none;
      margin: 0 14px;
    }
  }
}
.current_locale {
  opacity: 1 !important;
}
</style>
