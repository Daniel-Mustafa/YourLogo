Feature: Validações Login/Usuário

    Scenario: 1.0- Verificar se o Usúario corresponde ao Login Efetuado
    Given 1.1- O operador acessou o site YourLogo
    When 1.2- O operador Fez Login no site YourLogo
    Then 1.3- O Operador verificará se o Usuário é Válido
    
    Scenario: 2.0- Verificar o retorno de erro ao efetuar Login com Usuário Inválido
    
    Given 2.1- O operador acessou o site YourLogo
    When 2.2- O operador Fez Login no site YourLogo
    Then 2.3- O Operador confirmará um Usuário Inválido

    Scenario: 3.0- Efetuar Login/Logout
    
    Given 3.1- O operador acessou o site YourLogo
    When 3.2- O operador Fez Login no site YourLogo
    Then 3.3- O Operador irá efetuar Logout

     