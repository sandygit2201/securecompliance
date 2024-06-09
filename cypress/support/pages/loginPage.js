class LoginPage {
  //  click on signup and veriy url
  signup() {
    cy.contains("Sign Up").click();
  }
  //  login as user name password
  loginAs(userName, password) {
    cy.get('input[formcontrolname="email"]').then((emailEle) => {
      cy.wrap(emailEle).click();
      cy.wrap(emailEle).type(userName);
    });
    cy.get('input[formcontrolname="password"]').then((passwordEle) => {
      cy.wrap(passwordEle).click();
      cy.wrap(passwordEle).type(password);
    });

    cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();
