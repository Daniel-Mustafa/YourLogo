
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
    
    cy.get(elements_Compras.Women()).click()
    //cy.get(elements_Compras.Tshirt()).click()
    }    

//validar_Erro_Usuario() {
//    cy.get(elements_Login.Nome_Usuario()).should(elements_Funcoes.Not_Exist())
//    cy.get(elements_Login.Alert_Danger()).should(elements_Funcoes.Exist())
//    cy.get(elements_Login.Pega_Erro_Login()).should(elements_Funcoes.Contain(), elements_Login.Log_Error_Login())
//    }    
}

export default CT02_Compras;    

