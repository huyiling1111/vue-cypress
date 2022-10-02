const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
  reporter: "junit",
  reporterOptions: {
    mochaFile: "tests/TEST-output-[hash].xml",
    toConsole: true,
    attachments: true
  },
  video: false
});
