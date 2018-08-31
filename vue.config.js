module.exports = {
  pages: {
    index: "./demo/main"
  },
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: "default"
    }
  },
  baseUrl: process.env.NODE_ENV === "production" ? "/v-cropperjs/" : "/"
};
