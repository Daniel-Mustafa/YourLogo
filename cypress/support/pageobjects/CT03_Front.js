
/// <reference types="Cypress" />

import Elements_Login from '../Elements/Elements_Login'
const elements_Login = new Elements_Login
import Elements_Front from '../Elements/Elements_Front'
const elements_Front = new Elements_Front
import Elements_Funcoes from '../elements/Elements_Funcoes'
const elements_Funcoes = new Elements_Funcoes

const url = Cypress.config()

class CT03_Front {
 
//Scenario: 5.0- Verificar Front

//When 5.2- Verificar Portabilidade e Imprimir
Verificar_Front() {
    Cypress.on(elements_Funcoes.Exception(), (err, runnable) => { return false})
    cy.viewport(elements_Front.Portabilidade())
    }
//Then 5.3- Verifica funcionalidades do Site
Pesquisa_Personalizada() { 
    cy.get(elements_Front.Pesquisar()).within(($form) => {
    cy.get(elements_Front.Pesquisar_Campo()).type(elements_Front.Pesquisa())
    cy.root().submit()})
    cy.get(elements_Front.Produto()).contains(elements_Front.Tipo_Produto()).click()
    }
}

export default CT03_Front;