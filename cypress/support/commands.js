// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("Url", () => {
    cy.visit('/', {failOnStatusCode: false})
})

Cypress.Commands.add("ClicarAngularJS", () => {
    cy.get('[data-app-list="js"] > .js-app-list-inner > :nth-child(2) > a').should('be.visible')
})

Cypress.Commands.add("PrimeiraTarefa", () => {

    cy.get('.new-todo')
})

Cypress.Commands.add("ValidarTexto", () => {

    cy.get('.view > .ng-binding')

})

Cypress.Commands.add("SelecionarUmaTarefa", () => {

    cy.get('.toggle')
})

Cypress.Commands.add("BtnCompleted", () => {

    cy.get('.filters > :nth-child(3) > a')
})

Cypress.Commands.add("BtnActive", () => {

    cy.get('.filters > :nth-child(2) > a')
})

Cypress.Commands.add("BtnClearCompleted", () => {

    cy.get('.clear-completed')
})

