# Decisões Técnicas

Nesta seção, detalhamos as principais decisões técnicas adotadas para a criação da ferramenta.

## Uso do GitHub Copilot

- **Motivação:** Optou-se pelo Copilot devido à sua simplicidade e independência de hardware próprio, facilitando a integração e a automação do processo de criação de testes.
- **Implementação:** O Copilot é empregado para auxiliar na escrita dos scripts que convertem os inputs em casos de teste seguindo a sintaxe Gherkin.
- **Benefícios:** Automatiza a geração de código e reduz o tempo de desenvolvimento, permitindo que os desenvolvedores se concentrem em tarefas mais estratégicas.

## Adoção do Chat GPT 4.0

- **Motivação:** O Chat GPT 4.0 foi escolhido por ser o padrão adotado pelo GitHub Copilot, garantindo consistência e eficiência na geração dos scripts. Futuramente podemos abrir para que o usuário escolha o modelo.
- **Integração:** Ele auxilia na elaboração dos prompts e na interpretação dos scripts, colaborando para que a conversão para o formato Gherkin seja realizada de maneira correta.
- **Benefícios:** Eleva a qualidade dos testes gerados, além de proporcionar um fluxo de trabalho mais intuitivo e integrado entre as ferramentas.

## Utilização de Script como Input

- **Objetivo:** Permitir que um script seja utilizado como input, facilitando a criação automatizada dos testes.
- **Funcionamento:** O script atua como ponto de partida para a geração dos casos de teste, que são então convertidos para a sintaxe Gherkin.
- **Vantagens:** Simplifica a manutenção e atualização dos testes, ao mesmo tempo em que possibilita uma rápida adaptação aos novos requisitos do projeto.
