class SignUpPage {
  singUpAsSecurePro() {
    cy.get('[data-cy="secure-pro-sign-up"]').click();
    cy.url().should("eq", Cypress.config().baseUrl + "auth/sign-up/secure-pro");
  }
}

export default new SignUpPage();
