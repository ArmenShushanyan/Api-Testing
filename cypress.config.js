const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    Authorization: "753a6270fa3056268fc39b71d7099c007ae9e1965f94e07719ddbe3b025fc601"
  },
  e2e: {
    baseUrl: "https://gorest.co.in/public/v2/users"
  }
});
