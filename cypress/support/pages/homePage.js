class HomePage {
  
// navigate to entities 
  navigateToEntities(){
    cy.get('[routerlink="/secure-pro/entities"]').click()
  }
}

export default new HomePage();
