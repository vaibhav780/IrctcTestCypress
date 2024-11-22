/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.irctc.co.in/')
    cy.xpath('//*[@id="origin"]/span/input').type("Pune")
    cy.xpath('//*[@id="origin"]/span/div/ul/li[1]').click()
    cy.xpath('//*[@id="destination"]/span/input').type("Solapur")
    cy.xpath('//*[@id="destination"]/span/div/ul/li[1]').click()
    cy.xpath('//*[@id="jDate"]/span/input').type("24/11/2024")
    cy.contains('label',' BOOK TICKET ').click()
    cy.xpath('//*[@id="jDate"]/span/input').type("24/11/2024")
    cy.contains('button','Search').click()
  })
})
