describe('Testing Google Translate', () => {
    it('', () => {
      cy.visit('https://www.google.com');
      cy.get("input[type='text']").type('google translate').type("{enter}");
      cy.get('textarea').type('Hello world')
    });
  });