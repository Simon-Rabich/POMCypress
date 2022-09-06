
class Product {

    goToWomenTopMenu() {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.get('.submenu-container > :nth-child(1) > .sf-with-ul').click({force: true})
    }

    addProductToCart() {
       cy.get('.first-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click({force: true})
    }

    verifyProductIsAdded() {
        cy.get('.layer_cart_product > h2').should('be.visible').should('exist')
    }

    proceedToCheckOut() {
        cy.get('.button-container > .button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
    }
  }
  
  export default Product;