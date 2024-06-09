import entitiesPage from "../support/pages/entitiesPage";
import homePage from "../support/pages/homePage";
import loginPage from "../support/pages/loginPage";
import paymentPage from "../support/pages/paymentPage";
import secureProPage from "../support/pages/secureProPage";
import signupPage from "../support/pages/signupPage";
import { v4 as uuidv4 } from "uuid";

describe("Register as an Organization", () => {
  // generate random email
  let email = `sandy+testing+${uuidv4()}+@securecompliance.com`;
  // set password
  let password = "Sandy12%$#";
  let name = "sandy";

  beforeEach("clear cookies and visit application", () => {
    // clear all cookies and local storage before each test
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.viewport(2000, 1400);
    // invoke application
    cy.visit("/");
  });

  it("Register as an Organization", () => {
    // click on signup on login page
    loginPage.signup();
    // verify url on sign up page 
    cy.url().should("eq", Cypress.config().baseUrl + "auth/sign-up");
    // sign in as pro
    signupPage.singUpAsSecurePro();
    //  confirm that not registered as org
    secureProPage.confirmThatNotPartOfAnyOrg();
    // create org details
    let orgDetails = {
      orgName: "DELETE ME",
    };
    // enter org details and confirm
    secureProPage.enterOrgDetailsAndConfirm(orgDetails);

    let emailDetails = {
      email: email,
      name: name,
      password: password,
    };
    //  create email and submit
    secureProPage.enterEmailDetailsAndSubmit(emailDetails);
    // verify user email
    secureProPage.verifyUserEmail();
    cy.reload(true);
    // sign in enter payment details
    cy.contains("Already have an account? Sign In").click({ force: true });

    // confirm payment
    paymentPage.confirmPaymentInformation();
    paymentPage.confirmPayment();

    // declare card details
    let cardDetails = {
      number: "4242424242424242",
      expiry: "12/35",
      cvc: 123,
      name: "sandy",
      postalCode: "500001",
    };
    // fill card details and pay
    paymentPage.fillCardDetailsAndPay(cardDetails);

    // navigate to entities
    homePage.navigateToEntities();
    let entityDetails = {
      legalName: "sandy",
    };
    entitiesPage.createNewEntity(entityDetails);
    // Pending remaining script
  });
});
