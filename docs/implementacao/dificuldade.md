# Dificuldades e Limitações

A seguir, listamos os principais desafios e limitações encontrados durante o desenvolvimento da ferramenta.

## Ajuste do Prompt para Gherkin

- **Desafio:** Foi necessário refinar os prompts para garantir que o Copilot gerasse casos de teste corretamente no formato Gherkin.
- **Problema Específico:** O Copilot tendia a evitar o uso de palavras-chave típicas da sintaxe Gherkin, o que comprometia a estrutura dos testes.
- **Solução:** Ajustes contínuos e refinamento dos prompts, buscando forçar o uso correto dos termos e garantir a integridade dos casos de teste gerados.

## Criação de um Mecanismo de "Um Clique"

- **Objetivo:** Desenvolver um mecanismo que permita a criação de casos de teste com apenas um clique, otimizando o processo de desenvolvimento.
- **Desafio:** A implementação dessa funcionalidade exigiu a integração com a API do VSCode e a criação de uma interface intuitiva.
- **Abordagem:** Combinação de scripts automatizados e integração com a API do VSCode, para proporcionar uma experiência de uso mais ágil e simplificada.

## Complexidade da API do VSCode

- **Observação:** Embora a API do VSCode seja bem documentada, sua complexidade pode dificultar a implementação de funcionalidades avançadas.
- **Impacto:** Essa complexidade impôs desafios adicionais na integração e na criação de novos recursos, exigindo maior tempo de aprendizado e testes.
- **Mitigação:** Investimento em estudo e experimentação com a API, além do aproveitamento de recursos da comunidade e da própria documentação para superar as dificuldades.

## Limitações do GitHub Copilot Gratuito

- **Restrição:** A versão gratuita do GitHub Copilot impõe um limite de 50 requests por dia.
- **Consequência:** Esse limite restringe o número de vezes que a ferramenta pode ser utilizada diariamente, afetando a produtividade em cenários de desenvolvimento intensivo.
- **Alternativas:** Avaliação da possibilidade de migração para uma versão paga ou otimização dos requests, garantindo que cada utilização seja a mais eficiente possível.
