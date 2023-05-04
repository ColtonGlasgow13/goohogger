describe('Authentication tests', () => {
    it('Should sign up a new user and log in successfully', () => {
      cy.visit('https://goohogger.com');
  
      // Click "Or create an account" button
      cy.contains('Or create an account').click();
  
      // Sign up a new user
      cy.get('input[type="email"]').type('example@example.com');
      cy.get('input[type="password"]').type('example-password');
      cy.get('.submit-button').click();
  
      // Log out
      cy.contains('Logout').click();
  
      // Log in with the created user
      cy.get('input[type="email"]').type('example@example.com');
      cy.get('input[type="password"]').type('example-password');
      cy.get('.submit-button').click();
  
      // Check if the user is logged in
      cy.contains('Logout').should('be.visible');

      // Log out
      cy.contains('Logout').click();
    });
  });