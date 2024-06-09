class LoginPage {
  signup() {
    cy.contains("Sign Up").click();
    cy.url().should("eq", Cypress.config().baseUrl + "auth/sign-up");
  }

  loginAs(userName, password) {
    cy.get('input[formcontrolname="email"]').then((email) => {
      cy.wrap(email).click();
      cy.wrap(email).type(userName);
    });
    cy.get('input[formcontrolname="password"]').then((password) => {
      cy.wrap(password).click();
      cy.wrap(password).type(password);
    });

    cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();
