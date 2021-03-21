/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://salon-one.vercel.app/')
  })

  it('should have a header with text', () => {
    cy.get('header').contains('Hąr')
  });

  it('should be able to click on an item and this item should have content body', () => {
    cy.wait(1000);
    cy.get('#__next div').last().click();
    cy.wait(1000);
    cy.get('#__next div div').last().contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  });

  it('should be able to go back to the main list from an item', () => {
    cy.wait(1000);
    cy.get('#__next div').last().click();
    cy.wait(1000);
    cy.get('#__next img').first().click();
    cy.get('header').contains('Hąr')
  });

})
