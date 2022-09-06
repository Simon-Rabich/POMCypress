/// <reference types="cypress" />

  import SignInPage from '../pages/login';
  import Product from '../pages/product.js';
  import { login } from '../util'

  describe('Sign In', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  
    beforeEach(function () {
      cy.log('should be setUp() operation')
    });
  
    after(() => {
      cy.log("Tear Down Ability, resetDb() operation");
    });

    it('should show an error message on empty input', () => {
      const login_page = new SignInPage();
      login_page.visit();
      login_page.validate_location("http://automationpractice.com/index.php")
      login_page.validate_title()
      
      login(Cypress.env("bad_user"), Cypress.env('bad_pass'))  
      login_page.submit();
      login_page.getEmailError()
        .should('exist')
        .contains('Invalid email address.');

      login_page.fillEmail(Cypress.env('username'))
      login_page.fillPassword(Cypress.env('bad_pass'))
      login_page.submit();
      login_page
        .getPasswordError()
        .should('exist')
        .contains('Authentication failed.');
    });
    
    it('should sign in with correct credentials', () => {
      const USERNAME = String(Cypress.env('username'))
      const PASS = String(Cypress.env('password'))
      const login_page = new SignInPage();
      login_page.visit();
      login_page.validate_location("http://automationpractice.com/index.php")
      login_page.validate_title()
      login(USERNAME, PASS)
      login_page.validate_home_icon()
      login_page.validate_urls()
      login_page.logout()
      login_page.validate_location('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    });

    it('should go to women menu and add product to cart the good path', () => {

      const login_page = new SignInPage()
      login_page.visit();
      login_page.validate_location("http://automationpractice.com/index.php")
      login_page.validate_title()
      login(Cypress.env('username'), Cypress.env('password'))
      login_page.validate_home_icon()

      const add_product = new Product();
      add_product.goToWomenTopMenu()
      add_product.addProductToCart()
      add_product.verifyProductIsAdded()
      add_product.proceedToCheckOut()
      })
    });
