# O que é Gherkin?

Gherkin é uma linguagem de domínio específico usada para descrever requisitos e comportamentos de sistemas de forma legível tanto por humanos quanto por máquinas. É amplamente empregada em metodologias de **Desenvolvimento Orientado a Comportamento (BDD)**, onde a comunicação clara entre desenvolvedores, testadores e stakeholders é fundamental.

## Características Principais

- **Sintaxe Simples e Estruturada:**  
  Gherkin utiliza palavras-chave padronizadas, como `Given`, `When`, `Then`, `And` e `But`, que ajudam a estruturar cenários de testes de forma lógica e sequencial.

- **Linguagem Natural:**  
  A linguagem é escrita de forma que qualquer pessoa, independentemente de seu conhecimento técnico, possa entender os requisitos e os fluxos de comportamento do sistema.

- **Integração com Ferramentas de Teste:**  
  Algumas ferramentas interpretam os cenários escritos em Gherkin e os transformam em testes automatizados, permitindo uma validação contínua dos requisitos.

## Exemplo de Cenário em Gherkin

```gherkin
Feature: Autenticação de Usuário

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere suas credenciais corretas
    Then o usuário deve ser redirecionado para o painel de controle
```
