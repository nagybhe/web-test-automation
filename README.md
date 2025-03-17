# Automação de Testes para um Sistema Web e Monitoramento de Qualidade de API

Este repositório contém dois projetos principais:

- **Automação de Testes para um Sistema Web**
- **Monitoramento de Qualidade de API**

---

## Automação de Testes para um Sistema Web

### Objetivo
Criar um conjunto de testes automatizados para validar funcionalidades críticas de um sistema web, garantindo que as principais funcionalidades estejam funcionando corretamente e que a experiência do usuário seja consistente.

### Ferramentas
- **Playwright**: Usado para automação de testes em navegadores. Permite testar interfaces web em diferentes dispositivos e navegadores, simulando a interação do usuário.

### Escopo dos Testes
- **Testes de Login/Logout**: Validar a autenticação de usuários e a capacidade de fazer logout com sucesso.
- **Validação de Formulários**: Testar se os formulários estão funcionando corretamente, validando campos obrigatórios e tipos de dados.
- **Testes de UI Responsiva**: Validar o comportamento da interface do usuário em diferentes resoluções de tela (desktop, tablet e mobile).
- **Fluxos de Compra/Pagamento (se aplicável)**: Validar o processo de compra e pagamento, incluindo a adição de itens ao carrinho, preenchimento de dados de pagamento e confirmação de compra.
- **Relatório de Testes**: Gerar um relatório detalhado de cada execução de teste, com screenshots e logs para facilitar a análise dos resultados.

### Estrutura de Diretórios
```bash
node_modules/           # Pasta onde as dependências do projeto são armazenadas.
test-results/           # Pasta onde os resultados dos testes são armazenados.

tests/                  # Diretório contendo todos os testes automatizados do projeto.
  api/                  # Testes de API, que validam os endpoints da API.
    auth.test.js        # Testa a autenticação da API, validando login e autenticação.
    loadTest.test.js    # Testa o desempenho da API sob carga.
    schemaValidation.test.js  # Valida o esquema JSON das respostas da API.
    status.test.js      # Valida o status de resposta dos endpoints da API.

  web/                  # Testes de interface web, validando o comportamento das páginas.
    compra.test.js      # Testa o fluxo de compra, carrinho de compras e pagamento.
    formulario.test.js  # Valida a funcionalidade dos formulários.
    login.test.js       # Testa o fluxo de login/logout.
    responsivo.test.js  # Testa o comportamento da interface em diferentes resoluções de tela.

.babelrc                # Arquivo de configuração do Babel para transpilar o código JavaScript.
package-lock.json       # Descreve a árvore de dependências exata do projeto.
package.json            # Arquivo de configuração do projeto contendo dependências e scripts.
playwright.config.js    # Arquivo de configuração do Playwright para os testes de interface.
README.md               # Arquivo de documentação com informações sobre o projeto e como usá-lo.
```
### Como Executar os Testes

1. **Instalar as dependências**:

    ```bash
    npm install
    ```

2. **Executar os testes**: Para rodar os testes com o Playwright, execute o comando:

    ```bash
    npx playwright test
    ```

3. **Ver os relatórios de execução**: Após a execução dos testes, um relatório será gerado, incluindo capturas de tela e logs detalhados. Você pode encontrar aqui:
    ```bash
    http://localhost:9323/
    ```

# Monitoramento de Qualidade de API

## Objetivo
Criar um framework de testes para validar endpoints de API, garantindo que os serviços sejam consistentes, seguros e eficazes.

## Ferramentas
- **Jest**: Framework de testes em JavaScript que será utilizado para criar e executar os testes.
- **Supertest**: Biblioteca para testar requisições HTTP em Node.js, usada para validar a resposta de APIs.

## Escopo dos Testes
1. **Testes de Status e Resposta (200, 400, 500)**:
   - Validar se os endpoints estão retornando os status corretos conforme o esperado (por exemplo, 200 OK, 400 Bad Request, 500 Internal Server Error).
   
2. **Validação de Schemas JSON**:
   - Garantir que a resposta da API siga a estrutura esperada em formato JSON.

3. **Testes de Autenticação e Segurança**:
   - Validar a autenticação de usuários e a segurança dos endpoints (ex.: cabeçalhos de autorização).

4. **Testes de Carga e Estresse**:
   - Validar o comportamento da API sob carga (quantidade de requisições por segundo) para identificar possíveis pontos de falha.

## Como Executar os Testes

### Instalar as dependências:
Para instalar as dependências necessárias para rodar os testes, execute o seguinte comando:
```bash
npm install
```

Executar os testes:
Para rodar os testes da API com Jest, execute o comando:
```bash
npm test
```

Ver os resultados dos testes:
Após a execução, o Jest gerará os resultados no terminal, mostrando se os testes passaram ou falharam, além de detalhes sobre os erros. Por exemplo:

- ![PASS](https://img.shields.io/badge/PASS-100%25-brightgreen)
  tests/api/schemaValidation.test.js
- ![PASS](https://img.shields.io/badge/PASS-100%25-brightgreen)
  tests/api/loadTest.test.js
- ![PASS](https://img.shields.io/badge/PASS-100%25-brightgreen)
  tests/api/status.test.js
- ![PASS](https://img.shields.io/badge/PASS-100%25-brightgreen)
  tests/api/auth.test.js

Test Suites: <span style="color:green">4 passed</span>, 4 total  
Tests: <span style="color:green">8 passed</span>, 8 total  
Snapshots: 0 total  
Time: 3.622 s, estimated 4 s  
Ran all test suites.


## Contribuições

Contribuições para este projeto são bem-vindas! Se você deseja contribuir, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch para sua contribuição.
3. Faça suas alterações e crie um commit com uma mensagem clara.
4. Envie um pull request com a descrição das alterações.

---

Essa documentação descreve tanto a automação de testes do sistema web quanto o monitoramento da qualidade da API, incluindo detalhes sobre como configurar, executar os testes e validar os resultados. É uma boa prática manter a documentação atualizada, facilitando o trabalho de outros desenvolvedores ou equipes que possam colaborar com o projeto.
