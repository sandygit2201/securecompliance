import loginPage from "../support/pages/loginPage";
import paymentPage from "../support/pages/paymentPage";
import secureProPage from "../support/pages/secureProPage";
import signupPage from "../support/pages/signupPage";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

describe("Register as an Organization", () => {
  let email = `sandy+testing+${uuidv4()}+@securecompliance.com`;
  let password = "Sandy12%$#";
  let name = "sandy";

  beforeEach("clear cookies and visit application", () => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.viewport(2000, 1400);
    cy.visit("/");
  });

  it("Register as an Organization", () => {
    loginPage.signup();
    signupPage.singUpAsSecurePro();
    secureProPage.confirmThatNotPartOfAnyOrg();
    let orgDetails = {
      orgName: "DELETE ME",
    };

    secureProPage.enterOrgDetailsAndConfirm(orgDetails);

    let emailDetails = {
      email: email,
      // email:"tim+testing@securecompliance.org",
      // name: faker.person.fullName.toString(),
      name: name,
      password: password,
    };
    secureProPage.enterEmailDetailsAndSubmit(emailDetails);
    secureProPage.verifyUserEmail();
    cy.reload(true);
    cy.contains('Already have an account? Sign In').click({force:true})

    paymentPage.confirmPaymentInformation();
    paymentPage.confirmPayment();
    

    let cardDetails = {
      number: "4242424242424242",
      expiry: "12/35",
      cvc: 123,
      name: "sandy",
      postalCode:"500001"
    };
    paymentPage.fillCardDetailsAndPay(cardDetails);
  });
});
