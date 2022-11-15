describe('Testing ', () => {
    it('', () => {
      cy.visit('https://www.halodoc.com');
      cy.contains('Artikel').click()

      cy.url()
      .should('include', '/artikel')

      cy.contains('Coronavirus').click()

      cy.url()
      .should('include', '/kesehatan/coronavirus')
    });
  });