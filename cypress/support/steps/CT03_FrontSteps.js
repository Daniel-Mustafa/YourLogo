/* global Given, Then, When */

import Login from '../pageobjects/Login'
import CT03_Front from '../pageobjects/CT03_Front'
const login = new Login
const cT03_Front = new CT03_Front

//Scenario: 5.0- Verifica Portabilidade e Faz Pesquisa Personalizada
        
Given("5.1- O operador acessa o site YourLogo", () => {
    login.acessarSiteTroca();
})

When("5.2- Verifica Portabilidade e Faz Pesquisa Personalizada", () => {
    cT03_Front.Verificar_Front();
})

Then("5.3- Verifica funcionalidades do Site", () => {
    cT03_Front.Pesquisa_Personalizada();
})



