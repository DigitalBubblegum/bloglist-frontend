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
      cy.get('#username').type('testingCypress', { force: true })
      cy.get('#password').type('123456', { force: true })
      cy.contains('login').click()
      cy.contains('cypress has logged in')
    })
  })
  describe('When logged in', function() {
    beforeEach(function() {
      cy.get('#username').type('testingCypress', { force: true })
      cy.get('#password').type('123456', { force: true })
      cy.contains('login').click()
      cy.contains('cypress has logged in')
    })

    it('A blog can be created', function() {
      cy.contains('LogOut')
      cy.contains('Add blog')
      cy.contains('Add blog').click()
      cy.get('#blogTitle').type('Cypress is creating a new blog')
      cy.get('#blogAuthor').type('Me')
      cy.get('#blogUrl').type('cypress.com')
      cy.get('#blogLikes').type('140')
      cy.get('#saveBlog').click()
      cy.get('.notification').contains('Cypress is creating a new blog by author Me added to the blog')
      cy.contains('Cypress is creating a new blog')
      cy.contains('Me')
    })
  })
})