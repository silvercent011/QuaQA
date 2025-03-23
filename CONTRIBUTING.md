# Guia de Contribuição

Obrigado por querer contribuir com o projeto! Siga as etapas abaixo para contribuir com o projeto.

## Passo 1: Faça um Fork do Repositório

1. Acesse o repositório `QuaQA-Chat` no GitHub.
2. Clique no botão **Fork** no canto superior direito para criar uma cópia do repositório no seu perfil.

## Passo 2: Clone o Repositório Forkado

1. No seu terminal, clone o repositório forkado:
   ```bash
   git clone https://github.com/seu-usuario/QuaQA-Chat.git
   ```
2. Navegue até o diretório clonado:
   ```bash
   cd QuaQA-Chat
   ```

## Passo 3: Configure o Repositório Original como Upstream

1. Adicione o repositório original como remoto upstream:
   ```bash
   git remote add upstream https://github.com/aas8/QuaQA-Chat.git
   ```
2. Verifique os remotos configurados:
   ```bash
   git remote -v
   ```

## Passo 4: Crie uma Nova Branch

1. Atualize sua branch principal:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```
2. Crie uma nova branch para suas alterações:
   ```bash
   git checkout -b minha-branch
   ```

## Passo 5: Faça Suas Alterações

1. Realize as alterações necessárias no código.
2. Adicione os arquivos modificados:
   ```bash
   git add .
   ```
3. Faça um commit com uma mensagem clara:
   ```bash
   git commit -m "Descrição das alterações"
   ```

## Passo 6: Envie as Alterações para o Fork

1. Envie suas alterações para o repositório forkado:
   ```bash
   git push origin minha-branch
   ```

## Passo 7: Abra um Pull Request

1. Acesse o repositório original no GitHub.
2. Clique em **Pull Requests** e depois em **New Pull Request**.
3. Escolha sua branch no repositório forkado e compare com a branch principal do repositório original.
4. Preencha o título e a descrição do Pull Request e clique em **Create Pull Request**.

## Passo 8: Aguarde a Revisão

Aguarde que os mantenedores revisem seu Pull Request. Responda a quaisquer comentários ou solicitações de alterações.

---

Obrigado por contribuir! 🎉
