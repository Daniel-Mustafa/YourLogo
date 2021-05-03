
/// <reference types="Cypress" />

import Elements_Login from '../Elements/Elements_Login'
const elements_Login = new Elements_Login
import Elements_Compras from '../Elements/Elements_Compras'
const elements_Compras = new Elements_Compras
import Elements_Funcoes from '../elements/Elements_Funcoes'
const elements_Funcoes = new Elements_Funcoes

const url = Cypress.config()

class CT02_Compras {
 
//Scenario: 4.0- Efetuar uma compra no YourLogo

//When 4.2- O Operador efetuar a compra de uma Tshirt
Compra_Tshirt() {
    
    cy.get(elements_Compras.Women()).eq(0).click()
    cy.get(elements_Compras.Tshirt()).click()
    cy.get(elements_Compras.Ok_Tshirt()).should(elements_Funcoes.Exist())
    cy.get(elements_Compras.Compra_Tshirt()).click()
    cy.get(elements_Compras.Confirma_Compra()).click()
    cy.get(elements_Compras.Label_Nome()).should(elements_Funcoes.Contain(), elements_Compras.Txt_Nome())
    cy.get(elements_Compras.Confirma_Compra()).click()
    cy.get(elements_Compras.Checkbox()).should(elements_Funcoes.Be_visible)
    cy.get(elements_Compras.Checkbox()).check()
    cy.get(elements_Compras.Confirma_Compra()).click()
    cy.get(elements_Compras.Cartao()).click()
    cy.get(elements_Compras.Confirma_Compra()).click()
    }

//Then 4.3- O Operador poderá confirmar sua compra Finalizada   
confirmar_Compras() {

    cy.get(elements_Compras.Orders()).click()
    }

export default CT02_Compras;    

