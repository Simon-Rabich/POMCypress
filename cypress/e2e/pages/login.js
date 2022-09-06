/// <reference types="cypress" />

class SignInPage {
    visit() {
      cy.visit(Cypress.env('base_url'));
    }

    getLogo() {
      cy.get('.logo')
    }

    getEmailError() {
      return cy.get('ol > li');
    }
  
    getPasswordError() {
      return cy.get('ol > li')
    }
  
    fillEmail(value) {
      const field = cy.get(`#email`);
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get(`#passwd`);
      field.clear();
      field.type(value);
      return this;
    }
  
    submit() {
      const button = cy.get(`#SubmitLogin > span`);
      button.click();
    }

    validate_home_icon() {
      return cy.get('.icon-home').should('exist').should('be.visible')
    }

    validate_urls(url) {
      cy.url().should('include', '/index.php?controller=my-account') 
      cy.url().should('eq', Cypress.env('url_after_login'))
    }

    logout() {
      cy.get('.logout').click()
      cy.url().should('eq', Cypress.env('url_after_logout'))
    }

    validate_location(url) {
      cy.location().should((loc) => {
        expect(loc.href).to.eq(url);
      });
    }

    validate_title() {
      cy.title().should("equal", "My Store");
    }
  }
  
  export default SignInPage;