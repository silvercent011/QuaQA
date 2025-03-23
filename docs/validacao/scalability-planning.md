# Canvas de Planejamento de Escalabilidade

---

### 1. **Objetivo da Escalabilidade**

Garantir que a extensão mantenha:

- Tempo de resposta < 20 segundos para arquivos de até 1.000 linhas
- Consumo de recursos local (CPU/RAM) abaixo de 15% durante operações

---

### 2. **Volume Esperado de Interações**

| Cenário      | Requisições de Geração | Uso de IA (Tokens/mês) | Operações de Arquivo/h |
| ------------ | ---------------------- | ---------------------- | ---------------------- |
| Atual (Beta) | 500/dia                | N/A                    | N/A                    |

---

### 3. **Requisitos de Infraestrutura**

**Client-Side (VS Code):**

- Otimização de I/O para workspaces com >10.000 arquivos
- Gerenciamento de memória para processamento de arquivos grandes
- Cache local para respostas de IA frequentes

**Backend-Side (Dependências Externas):**

- Conta empresarial GPT-4 (aumento de rate limits para 500 RPM)
- CDN para templates de prompts pré-validados
- Serviço de fila para processamento assíncrono (ex: RabbitMQ para batch de requests)

---

### 4. **Estratégias de Escalabilidade**

| Estratégia              | Ação Concreta para Quaqa-Chat |
| ----------------------- | ----------------------------- |
| **Horizontal**          | N/A (extensão local)          |
| **Vertical**            | N/A (extensão local)          |
| **Cache**               | N/A (extensão local)          |
| **Assincronia**         | N/A (extensão local)          |
| **Degradação Graciosa** | N/A (extensão local)          |

---

### 5. **Custo Estimado**

| Componente        | Cenário Atual | Cenário Escalado                     |
| ----------------- | ------------- | ------------------------------------ |
| **Modelos de IA** | Free          | $0 (usa plano do copilot do usuário) |
| **Storage Local** | N/A           | $0 (usa filesystem do usuário)       |

---

### 6. **Riscos e Mitigação**

| Risco                          | Mitigação                                            |
| ------------------------------ | ---------------------------------------------------- |
| Latência na resposta do modelo | Preview progressivo dos resultados enquanto completa |

---

### 7. **Monitoramento de Escalabilidade**

- **Métricas-Chave:**

  ```typescript
  vscode.telemetry.sendMetric("gherkinGenTime", processingTime);
  vscode.telemetry.sendMetric("modelRetries", apiRetryCount);
  ```

---

### 8. **Plano de Teste em Ambiente Escalado**

1. **Teste de Carga:**

   - Simular o teste de arquivos acima de 1000 linhas

2. **Teste de Longevidade:**

   - N/A

3. **Teste de Degradação:**

   - Depende do plano copilot do usuário

4. **Teste de Recuperação:**
   - N/A

---

### **Ferramentas de Acompanhamento**

- N/A

### **Ciclo de Iteração**

- Otimizações de performance a cada 2 sprints

---

**Observações Técnicas Específicas:**

- A arquitetura baseada em extensão VS Code impõe limites de escalabilidade vertical (memória alocada pelo Electron)
- Estratégias devem focar em:
  - Gerenciamento eficiente de estados assíncronos
