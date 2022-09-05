export const login = (username, password) => {
    cy.get('.login').click()
    cy.get('#email').type(username)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
  }