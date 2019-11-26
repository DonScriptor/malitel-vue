const path = require("path");
module.exports = {
  lintOnSave: false,
  // useEslint: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/stylesheets/1_settings/_all.scss";
                @import "@/stylesheets/2_tools/_all.scss";  
              `
      }
    }
  }
};
