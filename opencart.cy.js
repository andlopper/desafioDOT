/// <reference types="Cypress" />

context('OpenCart', () => {
    
    before(() => {
        cy.visit('https://demo.opencartbrasil.com.br/'); //Acessa o site a ser testado
        cy.get('#cart > .btn').click(); //Abre o carrinho para visualização
        cy.get('#cart > .dropdown-menu li').should('contain.text', 'vazio'); //Verifica se o carrinho está vazio antes de iniciar os testes
    });

    it('Adiciona Macbooks ao carrinho', () => {
        cy.get('#search > .form-control').type('macbook'); //Captura o campo de pesquisa e digita o produto desejado
        cy.get('.input-group-btn > .btn').click(); //Clica no botão de pesquisar
        cy.get('#content > :nth-child(8) > :nth-child(2) .button-group').click('left'); //Dentro do conteúdo de produtos, captura o item de número 2 e clica na opção mais a esquerda (Adicionar ao carrinho)
        cy.get('#content > :nth-child(8) > :nth-child(1) .button-group').click('left'); //Mesmo processo anterior, agora com o item de número 1 da lista

        cy.get('#search > .form-control').clear().type('ipod'); //Limpa a área de texto e digita o novo produto a ser pesquisado
        cy.get('.input-group-btn > .btn').click(); //Clica no botão de pesquisar
        cy.get('#content > :nth-child(8) > :nth-child(4) .button-group').click('left'); //Mesmo processo do produto anterior, selecionando o item 4
        cy.get('#content > :nth-child(8) > :nth-child(3) .button-group').click('left'); //Adiciona o item 3 ao carrinho
    });
    

    after(() => {
        cy.get('#cart > .btn').click(); //Abre o carrinho para visualização
        cy.get('#cart > .dropdown-menu li  .table-striped tr').should('have.length', 4); //Verifica se dentro do carrinho estão os 4 itens adicionados anteriormente
    });

});