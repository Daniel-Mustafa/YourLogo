class Elements_Login {
    
//Acesso e Login YourLogo
    Site = () => { return 'http://automationpractice.com/index.php' }
    Pega_SignIn = () => { return '.login' }
    Pega_Email = () => { return '#email' } 
    Pega_Senha = () => { return '#passwd' }
    Email = () => { return 'mustafacasamagalhaes@gmial.com' }
    Email_Invalido = () => { return 'emailinvalido@email.com' }
    Senha = () => { return '2021.CasaMagalhaes' }
    
//Botões Login YourLogo
    SignIn_Btn = () => { return '#SubmitLogin' }
    Logout_Btn = () => { return '.logout' }
    
//Carregamento de Login Elementos do Texto
    Nome_Usuario = () => { return '.account'}

//Carregamento de Login Assertivas do Texto
    Alert_Danger = () => { return 'div.alert.alert-danger' }
    Pega_Erro_Login = () => { return 'ol > li' }
    Log_Error_Login = () => { return 'Authentication failed.'}

}

export default Elements_Login;