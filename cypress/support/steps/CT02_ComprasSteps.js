/* global Given, Then, When */

import Login from '../pageobjects/Login'
import CT02_Compras from '../pageobjects/CT02_Compras'
const login = new Login
const cT02_Compras = new CT02_Compras

//Scenario: 4.0- Efetuar uma compra no YourLogo
        
Given("4.1- O operador efetuou Login no site YourLogo", () => {
    login.acessarSiteTroca();
    login.efetuarLogin_Valido()
})

When("4.2- O Operador efetuar a compra de uma Tshirt", () => {
    cT02_Compras.Compra_Tshirt();
})

Then("4.3- O Operador poderá confirmar sua compra Finalizada", () => {
    cT02_Compras.confirmar_Compras();
})



