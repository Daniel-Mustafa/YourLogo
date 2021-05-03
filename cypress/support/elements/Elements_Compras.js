class Elements_Compras {
    
//Compra de uma Tshirt
Women = () => { return 'ul.sf-menu li' }
Tshirt = () => { return ':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span' }
Compra_Tshirt = () => { return '.button-container > .button-medium > span' }
Ok_Tshirt = () => { return '.icon-ok' }
Confirma_Compra = () => { return '.cart_navigation > .button > span' }
Checkbox = () => { return '#cgv' }
Cartao = () => { return '.bankwire' }
Orders = () => { return '.button-exclusive' }

//Confirmação de Dados Pessoais
Label_Nome = () => { return '#address_delivery > .address_firstname' }
Label_Company = () => { return '#address_delivery > .address_company' }
Label_Phone = () => { return '#address_delivery > .address_phone_mobile' }
Txt_Nome = () => { return 'Daniel Mustafa' }
Txt_Company = () => { return 'Casa Magalhaes' }
Txt_Phone = () => { return '+5585999060999'}
}

export default Elements_Compras;
