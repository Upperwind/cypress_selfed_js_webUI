/* class LoginPage{
    GetsEmailField() {
        return cy.get('#inputEmail').should('be.visible').focus()
    }

    GetPassField() {
        return cy.get('#inputPassword').should('be.visible').focus()
    }

    GetLoginButton() {
        return cy.get('#login').should('be.visible')
    }

    GetAlertMessage() {
        cy.get('.card-body > .alert').contains('Please complete the captcha and try again.')
    }

    
}
export default LoginPage */

class LoginPage{
    GetsUserNameField() {
        return cy.get('#userName').should('be.visible').focus()
    }

    GetPassField() {
        return cy.get('#password').should('be.visible').focus()
    }

    GetLoginButton() {
        return cy.get('#login').should('be.visible')
    }

    GetAlertMessage() {
        cy.get('#name').contains('Invalid username or password!')
    }

    GetLogoutButton() {
      return cy.get('#submit')
        .should('be.visible')
        .contains('Log out')
    }

    
}
export default LoginPage