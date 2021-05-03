/* global Given, Then, When */

import Login from '../pageobjects/Login'
import CT01_Login from '../pageobjects/CT01_Login'
const login = new Login
const cT01_Login = new CT01_Login

//Scenario: 1.1.0- Verificar se o Usúario corresponde ao Login Efetuado
        
Given("1.1- O operador acessou o site YourLogo", () => {
    login.acessarSiteTroca();
})

When("1.2- O operador Fez Login no site YourLogo", () => {
    login.efetuarLogin_Valido();
})

Then("1.3- O Operador verificará se o Usuário é Válido", () => {
    cT01_Login.validar_Usuario();
})

//Scenario: 2.0- Verificar o retorno de erro ao efetuar Login com Usuário Inválido

Given("2.1- O operador acessou o site YourLogo", () => {
    login.acessarSiteTroca();
})

When("2.2- O operador Fez Login no site YourLogo", () => {
    login.efetuarLogin_Invalido();
})

Then("2.3- O Operador confirmará um Usuário Inválido", () => {
    cT01_Login.validar_Erro_Usuario();
})

//Scenario: 3.0- Efetuar Login/Logout

Given("3.1- O operador acessou o site YourLogo", () => {
    login.acessarSiteTroca();
})

When("3.2- O operador Fez Login no site YourLogo", () => {
    login.efetuarLogin_Valido();
})

Then("3.3- O Operador irá efetuar Logout", () => {
    cT01_Login.efetuar_Logout();
})