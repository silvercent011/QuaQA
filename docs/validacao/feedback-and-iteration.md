# Canvas de Feedback e Iteração

---

### 1. Objetivo do Feedback

**Identificar pontos de melhoria na geração de testes Gherkin e na integração com o fluxo de trabalho do VS Code, garantindo:**

- Precisão dos cenários gerados
- Usabilidade da extensão
- Desempenho na integração com modelos de linguagem
- Adequação às necessidades de desenvolvedores de testes automatizados

### 2. Fontes de Feedback

- **Usuários Finais:** Desenvolvedores QA, engenheiros de automação
- **Equipe Interna:** Mantenedores da extensão, testadores
- **Canais Técnicos:** Issues no GitHub, reviews na marketplace do VS Code
- **Dados de Uso:** Taxa de sucesso na criação de arquivos .feature

### 3. Métodos de Coleta

- **Feedback In-App:** Botão de "like" ou "deslike" nos arquivos criados

### 4. Categorias de Feedback

| Categoria           | Exemplos Específicos do Código                   |
| ------------------- | ------------------------------------------------ |
| **Funcionalidade**  | Falha na extração do bloco Gherkin (regex atual) |
| **Extensibilidade** | Suporte para outras linguagens além de Python    |

### 5. Priorização de Feedback

**Critérios:**

1. Impacto na experiência principal (geração de testes)
2. Frequência de ocorrência
3. Complexidade de implementação

**Exemplos:**

- **Crítica:** Falha ao analisar resposta do modelo (ex: regex não captura bloco)
- **Alta:** Geração de cenários semanticamente incorretos
- **Média:** Ausência de preview antes de salvar o arquivo
- **Baixa:** Personalização do diretório de saída

### 6. Métricas de Análise

- Taxa de sucesso na criação de arquivos .feature
- Tempo médio de resposta do modelo de linguagem
- NPS (Net Promoter Score) específico para a extensão
- Redução de erros de sintaxe Gherkin pós-iterações

### 7. Iterações Planejadas

1. Melhorar regex de parsing de blocos Gherkin
2. Adicionar indicador de progresso durante geração
3. Implementar validação de sintaxe Gherkin pré-salvamento
4. Adicionar suporte para múltiplos cenários por arquivo
5. Permitir configuração de modelos de linguagem alternativos

### 8. Cronograma de Iterações

| Iteração | Foco Principal         | Entregas Esperadas                                               |
| -------- | ---------------------- | ---------------------------------------------------------------- |
| **1-2**  | Estabilidade Core      | - Parsing robusto de respostas<br>- Tratamento completo de erros |
| **3-4**  | Experiência do Usuário | - Progress indicators<br>- Pré-visualização                      |
| **5-6**  | Extensibilidade        | - Suporte multi-linguagem<br>- Configurações personalizáveis     |

### 9. Avaliação Pós-Iteração

- **Testes A/B:** Comparar taxa de sucesso antes/depois das mudanças
- **Monitoramento Contínuo:**
  ```typescript
  // Exemplo de métrica a ser implementada
  vscode.telemetry.sendMetric("gherkinGenSuccess", successRate);
  ```
- **Análise Qualitativa:** Revisão manual de arquivos gerados em diferentes cenários
- **Benchmarking:** Comparar tempo de resposta com outras extensões similares

### 10. Documentação Contínua

- **Changelog Público:** Versão + mudanças no repositório GitHub
- **Knowledge Base:** Artigos técnicos sobre:
  - Padrões de prompt engineering utilizados
  - Arquitetura de integração com VS Code API
- **Post-Mortems:** Documentação pública de incidentes críticos
- **User Guide:** Atualizações interativas na própria extensão

---

**Ferramentas Recomendadas:**

- **GitHub Projects:** Para tracking de issues e milestones
- **Application Insights:** Para telemetria de uso
- **Playwright Test:** Para testes de regressão automatizados na UI do VS Code

**Ciclo de Iteração:**

- Releases menores a cada 2 semanas (hotfixes conforme necessidade)
- Major releases trimestrais com novas funcionalidades
