# Diagrama de Componentes para Extensão VS Code "quaqa-chat"

#### Elementos:

1. **Ativação da Extensão**

   - **Função**: Inicializa a extensão e configura o ambiente de trabalho.
   - **Tecnologia**: VS Code Extension API
   - **Fluxo**:
     - Inicia a verificação do workspace.
     - Invoca os demais componentes para criação do diretório e registro de comandos.

2. **Gerenciamento de Workspace**

   - **Função**: Verifica a existência do diretório de trabalho e cria a pasta `features` se necessário.
   - **Tecnologia**: Node.js (módulos `fs` e `path`)
   - **Fluxo**:
     - Após a ativação, assegura que a estrutura de pastas esteja preparada para salvar os arquivos de teste.

3. **Registro de Comando**

   - **Função**: Registra o comando `quaqa-chat.processPythonFile` que inicia o processamento do arquivo selecionado.
   - **Tecnologia**: VS Code API
   - **Fluxo**:
     - Aguarda a seleção de um arquivo e invoca o processamento.

4. **Processador de Arquivos**

   - **Função**:
     - Lê o conteúdo do arquivo selecionado.
     - Determina a linguagem do arquivo e formata o conteúdo dentro de um bloco de código.
   - **Tecnologia**: Node.js (módulo `fs`)
   - **Fluxo**:
     - Após a seleção, extrai dados essenciais (como `languageId`) e prepara o conteúdo para envio.

5. **Integração com Chat (API LM)**

   - **Função**:
     - Constrói as mensagens (prompt base e conteúdo do arquivo) para enviar ao modelo GPT-4.
     - Agrega a resposta token a token.
   - **Tecnologia**: VS Code Language Model API
   - **Fluxo**:
     - Recebe os dados formatados do processador de arquivos, envia a requisição e aguarda o retorno com o teste em Gherkin.

6. **Extrator de Gherkin**

   - **Função**: Utiliza uma expressão regular para extrair o bloco de Gherkin da resposta do modelo.
   - **Tecnologia**: Expressões Regulares (Regex)
   - **Fluxo**:
     - Processa a resposta do chat e isola o conteúdo entre `gherkin e `.

7. **Escritor de Arquivo de Teste**

   - **Função**:
     - Cria o arquivo `.feature` com o conteúdo extraído.
     - Gerencia a nomenclatura (evitando sobrescritas com sufixos numéricos, se necessário).
   - **Tecnologia**: Node.js (módulos `fs` e `path`)
   - **Fluxo**:
     - Se o conteúdo do Gherkin for válido, salva o teste na pasta `features`.

8. **Chat Participant Stub**
   - **Função**: Espaço reservado para futuras interações via chat dentro do VS Code.
   - **Tecnologia**: VS Code Chat API
   - **Fluxo**:
     - Atualmente inativo, mas integrado para expansão de funcionalidades.

<!-- ---

#### Legenda:

- **Retângulos**: Cada componente listado é representado por um retângulo.
- **Setas**:
  - Indicam o fluxo de dados e dependências entre componentes.
  - Por exemplo:
    - A "Ativação da Extensão" dispara o "Gerenciamento de Workspace" e o "Registro de Comando".
    - O "Registro de Comando" conecta ao "Processador de Arquivos", que envia dados para a "Integração com Chat".
    - A resposta do chat é processada pelo "Extrator de Gherkin", e o resultado final é salvo pelo "Escritor de Arquivo de Teste".
- **Cores/Símbolos** (sugestão):
  - **Azul**: Componentes que interagem diretamente com a API do VS Code (ex.: Ativação da Extensão, Registro de Comando, Chat Participant).
  - **Verde**: Componentes de manipulação de arquivos e diretórios (ex.: Gerenciamento de Workspace, Processador de Arquivos, Escritor de Arquivo de Teste).
  - **Laranja**: Componentes de integração com serviços externos e processamento de dados (ex.: Integração com Chat, Extrator de Gherkin).

--- -->

### Fluxo Resumido:

1. **Ativação** → Verifica o workspace e cria a pasta `features` (Gerenciamento de Workspace).
2. **Registro de Comando** → Espera a seleção de um arquivo e aciona o processamento.
3. **Processador de Arquivos** → Lê e formata o arquivo, determinando sua linguagem.
4. **Integração com Chat** → Envia o conteúdo formatado para o GPT-4 e recebe a resposta.
5. **Extrator de Gherkin** → Isola o trecho de código Gherkin da resposta.
6. **Escritor de Arquivo de Teste** → Salva o Gherkin em um arquivo `.feature`, evitando conflitos de nomenclatura.
7. **Chat Participant Stub** → Espaço reservado para futuras interações.
