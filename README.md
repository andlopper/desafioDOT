# Desafio DOT — automação com Cypress

Exercício de testes de interface em JavaScript para pesquisar produtos e conferir o carrinho na demonstração brasileira do OpenCart.

## Cenário implementado

O arquivo [opencart.cy.js](opencart.cy.js) contém um teste com preparação e conferência final:

1. Acessa `https://demo.opencartbrasil.com.br/` e verifica o carrinho vazio.
2. Pesquisa por `macbook` e adiciona dois produtos.
3. Pesquisa por `ipod` e adiciona mais dois produtos.
4. Soma os preços capturados nas listagens.
5. Verifica quatro linhas de produtos no carrinho e compara o total com a soma calculada.

A função `format` converte o texto de preço em formato brasileiro para permitir o cálculo. A verificação confere quantidade e total; não compara individualmente os nomes dos produtos.

## Como executar

Este repositório contém apenas o script e este README: não inclui `package.json`, dependências fixadas ou configuração Cypress. Prepare um projeto Cypress E2E separadamente, com Node.js e npm compatíveis com a versão escolhida:

```sh
mkdir dot-cypress-local
cd dot-cypress-local
npm init -y
npm install --save-dev cypress
npx cypress open
```

No assistente, configure E2E Testing e um navegador. Copie `opencart.cy.js` para `cypress/e2e/` e selecione o teste na interface. Depois da configuração, também é possível executar:

```sh
npx cypress run --spec cypress/e2e/opencart.cy.js
```

## Estado e limitações

Exercício histórico, dependente da disponibilidade e da estrutura de um site externo. Os seletores posicionais (`nth-child`) podem quebrar se a página mudar. O script pressupõe carrinho vazio e quatro produtos disponíveis; não inclui limpeza final.

Não há testes de API, login, checkout, pagamento ou integração contínua neste repositório. A compatibilidade com versões atuais do Cypress e a execução no site não foram revalidadas nesta revisão de documentação.
