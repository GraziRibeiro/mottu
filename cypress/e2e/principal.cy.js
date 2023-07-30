
const dados = require('../fixtures/dados.json')

describe('Acessar site', () => {

  beforeEach(() => {
    
    cy.Url()

  })

  context('Usuario acessando um dos itens', function () {

    it('Inserir uma tarefa', () =>{
      
      cy.ClicarAngularJS()
        .click()
      cy.PrimeiraTarefa()
        .type(dados.tarefa)
        .type('{enter}', {timeout: 400})
   
      cy.SelecionarUmaTarefa()
        .check()

      cy.BtnActive()
        .click()

      cy.BtnCompleted()
        .click()
        .end()
      

      cy.BtnClearCompleted()
        .click()
      
    })
  })

  })
  