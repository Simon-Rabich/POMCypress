import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    base_url: 'http://automationpractice.com/',
    username: "test@otorio.com",
    password: "admin",
    bad_user: 'aaabbbccc',
    bad_pass: '1234567',
  }
});
