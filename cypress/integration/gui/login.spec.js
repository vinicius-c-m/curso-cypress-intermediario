/// <reference types="Cypress" />



describe('Login', () => {
    it('Successfully', () => {
        cy.login()
        cy.get('.header-user-avatar').should('exist')

 
    })
})