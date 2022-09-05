
class Header {
    getSignInLink() {
      return cy.get(`[data-testid=SignInLink]`);
    }
  }
  
  export default Header;