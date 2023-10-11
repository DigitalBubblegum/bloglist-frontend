describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.request('POST','http://localhost:3003/api/users', { username: 'testingCypress' , password: '123456', name: 'cypress'  } )
    cy.visit('http://localhost:5173')
  })

  it('Login form is shown', function() {
    cy.get('#username')
    cy.get('#password')
    cy.contains('login')
  })
  describe('Login', function() {
    it('fails with wrong credentials', function() {
      cy.get('#username').type('testCypress', { force: true })
      cy.get('#password').type('wrong', { force: true })
      cy.contains('login').click()
      cy.get('.error').wait(1000).contains('Wrong credentials')
      cy.get('.error').should('have.css', 'color', 'rgb(255, 0, 0)')
      cy.get('.error').should('have.css', 'border-style', 'solid')
    })
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('testCypress', { force: true })
      cy.get('#password').type('123456', { force: true })
      cy.contains('login').click()
    })
  })
})