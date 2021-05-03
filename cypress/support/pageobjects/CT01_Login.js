
/// <reference types="Cypress" />

import Elements_Login from '../Elements/Elements_Login'
const elements_Login = new Elements_Login
import Elements_Funcoes from '../elements/Elements_Funcoes'
const elements_Funcoes = new Elements_Funcoes

const url = Cypress.config()

class CT01_Login {
 
//Scenario: 1.0- Verificar se o Usúario corresponde ao Login Efetuado
//Then 1.3- O Operador verificará se o Usuário é Válido
validar_Usuario() {
    cy.get(elements_Login.Nome_Usuario()).should(elements_Funcoes.Exist())
    cy.get(elements_Login.Alert_Danger()).should(elements_Funcoes.Not_Exist())
    cy.get(elements_Login.Pega_SignIn()).should(elements_Funcoes.Not_Exist())
    }    

//Scenario: 2.0- Verificar o retorno de erro ao efetuar Login com Usuário Inválido
//Then 2.3 - O Operador confirmará um Usuário Inválido    
validar_Erro_Usuario() {
    cy.get(elements_Login.Nome_Usuario()).should(elements_Funcoes.Not_Exist())
    cy.get(elements_Login.Alert_Danger()).should(elements_Funcoes.Exist())
    cy.get(elements_Login.Pega_Erro_Login()).should(elements_Funcoes.Contain(), elements_Login.Log_Error_Login())
    }    

//Scenario: 3.0- Efetuar Login/Logout
//Then 3.3- O Operador irá efetuar Logout
efetuar_Logout() {
    cy.get(elements_Login.Logout_Btn()).click()
    cy.get(elements_Login.Pega_SignIn()).should(elements_Funcoes.Exist())
    }
}

export default CT01_Login;