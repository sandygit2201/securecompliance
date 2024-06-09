class PaymentPage {
  fillCardDetailsAndPay(cardInfo) {
    cy.wait(5000);
    cy.get('iframe[name="embedded-checkout"]').then((iframe) => {
      const iframe_body = cy.wrap(iframe.contents().find("body"));

      iframe_body.find("#cardNumber").type(cardInfo.number);
    });
    cy.wait(3000);
    cy.get('iframe[name="embedded-checkout"]').then((iframe) => {
      const iframe_body = cy.wrap(iframe.contents().find("body"));

      iframe_body.find("input[name='cardExpiry']").type(cardInfo.expiry);
    });
    cy.wait(3000);
    cy.get('iframe[name="embedded-checkout"]').then((iframe) => {
      const iframe_body = cy.wrap(iframe.contents().find("body"));

      iframe_body.find("#cardCvc").type(cardInfo.cvc);
    });

    cy.wait(3000);
    cy.get('iframe[name="embedded-checkout"]').then((iframe) => {
      cy.wrap(iframe.contents().find("body")).find("#billingName").type(cardInfo.expiry);
      cy.wrap(iframe.contents().find("body")).find("#billingPostalCode").type(cardInfo.postalCode);
    });
    
    // cy.get("#billingCountry").select(cardInfo.country);
    // cy.get("#billingPostalCode").type(cardInfo.pin);

    cy.contains("Your payment has been processed.").should("be.visible");

    cy.contains("Next").click();
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
