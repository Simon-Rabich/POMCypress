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
    home_page_url: 'http://automationpractice.com/index.php',
    url_after_logout: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    url_after_login: 'http://automationpractice.com/index.php?controller=my-account',
  },
});
