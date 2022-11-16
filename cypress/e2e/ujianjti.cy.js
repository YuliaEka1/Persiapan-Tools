describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://ujian.jti.polinema.ac.id')
      cy.get("input[name=xuser_name]").type('2041720073')
      cy.get("input[name=xuser_password]").type('2041720073');
      cy.get("input[type=submit]").click();
    })
  })