class SecureProPage {
  confirmThatNotPartOfAnyOrg() {
    cy.get('[data-cy="org-check-no"]').click();
    cy.contains("Enter your Organization's Name to get started").should(
      "be.visible"
    );
  }

  enterOrgDetailsAndConfirm(orgDetails) {
    // cy.get('#mat-mdc-form-field-label-4').click({force:true})
    cy.contains("Organization Name").click();
    cy.get("input[autocomplete='organization']").type(orgDetails.orgName);
    cy.get('[data-cy="secure-pro-sign-up-agree-continue"]').click();
    cy.get('[data-cy="secure-pro-email-sign-up"]').should("be.visible");
  }

  enterEmailDetailsAndSubmit(emailDetails) {
    cy.get('[data-cy="secure-pro-email-sign-up"]').click();
    cy.get("input[formcontrolname='email']").then((email) => {
      cy.wrap(email).click();
      cy.wrap(email).type(emailDetails.email);
    });

    cy.get("input[formcontrolname='name']").then((name) => {
      cy.wrap(name).click();
      cy.wrap(name).type(emailDetails.name);
    });

    cy.get("input[formcontrolname='password']").then((password) => {
      cy.wrap(password).click();
      cy.wrap(password).type(emailDetails.password);
    });

    cy.contains("Agree and Sign Up").click();
    cy.get('[data-cy="verify-email-button"]').should("be.visible");
  }

  verifyUserEmail() {
    cy.get('[data-cy="verify-email-button"]').click();
  }
}

export default new SecureProPage();
