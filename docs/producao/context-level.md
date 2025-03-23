# Diagrama de Contexto para quaqa-chat

#### Elementos:

- **Sistema Principal: quaqa-chat (Assistente Inteligente)**

  - Responsável por processar arquivos de código, enviar requisições ao modelo de linguagem e gerar testes em Gherkin.

- **Atores Externos:**

  1. **Usuário (Desenvolvedor)**

     - **Interação:**
       - Aciona comandos via VS Code para processar arquivos.
       - Recebe feedback e notificações da extensão.

  2. **Ambiente VS Code**

     - **Interação:**
       - Hospeda a extensão e disponibiliza as APIs para manipulação do workspace, leitura de arquivos e exibição de mensagens.

  3. **Serviço de IA (GPT-4 via VS Code LM API)**
     - **Interação:**
       - Recebe o código formatado e o prompt do quaqa-chat.
       - Retorna a resposta contendo o código Gherkin, que será extraído e salvo como arquivo de teste.

---

#### Fluxo de Interações:

- **Usuário → quaqa-chat:**

  - Inicia a execução do comando para processar um arquivo de código.

- **quaqa-chat → Ambiente VS Code:**
  - Utiliza as APIs do VS Code para acessar o workspace, ler arquivos e criar notificações.
- **quaqa-chat → Serviço de IA:**
  - Envia o código do arquivo (incluindo a identificação da linguagem) juntamente com um prompt base para gerar os testes.
- **Serviço de IA → quaqa-chat:**
  - Retorna a resposta com o bloco de Gherkin contendo os testes gerados.
- **quaqa-chat → Ambiente VS Code e Usuário:**
  - Salva o arquivo gerado no sistema de arquivos do workspace.
  - Exibe notificações informando o sucesso ou eventuais erros na operação.

---

<!--
#### Legenda (Opcional):

- **Central:**
  - **quaqa-chat** (Assistente Inteligente)

- **Atores Externos:**
  - **Usuário (Desenvolvedor)**
  - **Ambiente VS Code** (Interface e Plataforma)
  - **Serviço de IA (GPT-4 via VS Code LM API)** (Processamento de Linguagem Natural)

--- -->
