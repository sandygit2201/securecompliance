class HomePage {
  

  navigateToEntities(){
    cy.get('[routerlink="/secure-pro/entities"]').click()
  }
}

export default new HomePage();
