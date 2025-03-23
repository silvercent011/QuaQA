# Diagrama de Contêiner para quaqa-chat

#### Elementos:

1. **Frontend (VS Code Editor)**

   - **Tecnologia:** VS Code Extension UI
   - **Função:** Interface de interação com o usuário, onde comandos são acionados e mensagens são exibidas.
   - **Interação:** O usuário aciona comandos e recebe feedback via notificações e mensagens informativas.

2. **Extension Backend**

   - **Tecnologia:** Node.js, VS Code Extension API
   - **Função:** Gerenciar a lógica da extensão, incluindo a leitura e formatação de arquivos, registro de comandos e gerenciamento da pasta de testes.
   - **Interação:** Processa os arquivos selecionados pelo usuário e orquestra a comunicação com o serviço de IA, além de interagir com o sistema de arquivos.

3. **Serviço de IA (GPT-4 via VS Code LM API)**

   - **Tecnologia:** VS Code Language Model API, GPT-4
   - **Função:** Receber o código formatado e gerar casos de teste em Gherkin de acordo com o prompt definido.
   - **Interação:** Processa as requisições do Extension Backend e retorna o conteúdo formatado em Gherkin.

4. **Armazenamento Local (Workspace File System)**
   - **Tecnologia:** Node.js (módulos `fs` e `path`)
   - **Função:** Armazenar os arquivos gerados (arquivos `.feature` contendo os casos de teste).
   - **Interação:** O Extension Backend grava os arquivos gerados no diretório de testes do workspace.

---

#### Interações Entre Contêineres:

- **Usuário → Frontend:** O usuário utiliza o VS Code para acionar o comando que processa o arquivo de código.
- **Frontend → Extension Backend:** A extensão capta o comando e repassa o URI do arquivo a ser processado.
- **Extension Backend → Serviço de IA:** O código lido e formatado é enviado como mensagem para o GPT-4 via API, solicitando a geração dos casos de teste.
- **Serviço de IA → Extension Backend:** O GPT-4 retorna a resposta contendo o Gherkin, que é extraído pelo backend.
- **Extension Backend → Armazenamento Local:** O conteúdo em Gherkin é gravado como um arquivo `.feature` na pasta `features` do workspace.
- **Feedback:** O usuário recebe notificações sobre a criação do arquivo e possíveis erros diretamente no VS Code.

<!-- ---

#### Legenda (Opcional):

- **Contêiner de Interface:** VS Code Editor (Frontend)
- **Contêiner de Lógica de Negócios:** Extension Backend (processamento e orquestração)
- **Contêiner de Processamento de Dados:** Serviço de IA (GPT-4 via VS Code LM API)
- **Contêiner de Armazenamento:** Workspace File System (armazenamento dos arquivos gerados)

--- -->
