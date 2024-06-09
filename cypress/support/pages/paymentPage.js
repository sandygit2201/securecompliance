class PaymentPage {
  //  fill payment details in iframe
  fillCardDetailsAndPay(cardInfo) {
    cy.wait(5000);
    cy.get('iframe[name="embedded-checkout"]').then((iframe) => {
      cy.wait(3000);
      cy.wrap(iframe.contents().find("body"))
        .find("#cardNumber")
        .type(cardInfo.number);
      cy.wait(3000);
      cy.wrap(iframe.contents().find("body"))
        .find("input[name='cardExpiry']")
        .type(cardInfo.expiry);
      cy.wait(3000);
      cy.wrap(iframe.contents().find("body"))
        .find("#cardCvc")
        .type(cardInfo.cvc);
      cy.wait(3000);
      cy.wrap(iframe.contents().find("body"))
        .find("#billingName")
        .type(cardInfo.name);
      cy.wait(3000);
      cy.wrap(iframe.contents().find("body"))
        .find("#billingPostalCode")
        .type(cardInfo.postalCode);
      cy.wait(3000);
      cy.wrap(iframe.contents().find("body"))
        .find("[data-testid='hosted-payment-submit-button']")
        .click({ force: true });
    });

    cy.contains("Your payment has been processed.").should("be.visible");
    cy.wait(3000);
    cy.contains("Next").click();
    cy.wait(3000);
    cy.contains("Back to Dashboard").click();
  }

  confirmPaymentInformation() {
    cy.contains("Next").click();
    cy.contains("Proceed to payment to get started!").should("be.visible");
  }

  confirmPayment() {
    cy.contains("Proceed to Payment").click();
  }
}

export default new PaymentPage();
