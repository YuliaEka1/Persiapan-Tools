describe('Testing KBBI', () => {
  it('I can search for content', () => {
    cy.visit('https://www.kbbi.web.id');
    cy.get("input[type='text']").type('harus');
    cy.get("input[type='submit']").click();
    
  });
});