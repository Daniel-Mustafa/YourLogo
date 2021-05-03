/// <reference types="Cypress" />

import Elements_Login from '../elements/Elements_Login'
const elements_Login = new Elements_Login
import Elements_Funcoes from '../elements/Elements_Funcoes'
const elements_Funcoes = new Elements_Funcoes
const url = Cypress.config()

class Login {
// Given: 1.1.1- O operador acessou o site YourLogo
    acessarSiteTroca() {
        cy.clearCookies()
        cy.visit(elements_Login.Site())
    }
// When: 1.1.2- O operador Fez Login no site YourLogo
    efetuarLogin_Valido() {
        
        cy.get(elements_Login.Pega_SignIn()).click()
        cy.get(elements_Login.Pega_Email()).type(elements_Login.Email())
        cy.get(elements_Login.Pega_Senha()).type(elements_Login.Senha())
        cy.get(elements_Login.SignIn_Btn()).click()
    }
// 1.2- And: O operador Fez Login no Painel de Vendas
    efetuarLogin_Invalido() {
        
        cy.get(elements_Login.Pega_SignIn()).click()
        cy.get(elements_Login.Pega_Email()).type(elements_Login.Email_Invalido())
        cy.get(elements_Login.Pega_Senha()).type(elements_Login.Senha())
        cy.get(elements_Login.SignIn_Btn()).click()
    }
}

export default Login;