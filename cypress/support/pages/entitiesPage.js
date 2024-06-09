class EntitiesPage {
    // method to create new entity 
  createNewEntity(entityDetails) {
    cy.contains("New Entity").click();
    cy.get("[formcontrolname='legalName']").then((ele) => {
      cy.wrap(ele).click();
      cy.wrap(ele).type(entityDetails.legalName);

      cy.contains("Add Owner").scrollIntoView().click({force:true})
      cy.wait(5000)
    });
  }
}

export default new EntitiesPage();
