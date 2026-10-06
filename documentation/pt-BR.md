<!-- ELUCENIA technical documentation · news2 · pt-BR · no clinical/professional/rights approval -->

# NEWS2 (National Early Warning Score 2)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/news2)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Frequência respiratória

`fr`

irpm · intervalo: 3–70

### SpO₂

`spo2`

% · intervalo: 50–100

### Escala de SpO₂

`escala`

- `1` — Escala 1 (padrão)
- `2` — Escala 2 (insuficiência respiratória hipercápnica confirmada; alvo 88–92% prescrito)

### Em uso de oxigênio?

`o2`

- `0` — Ar ambiente
- `1` — Oxigênio suplementar

### Pressão sistólica

`pas`

mmHg · intervalo: 40–300

### Frequência cardíaca

`fc`

bpm · intervalo: 20–250

### Nível de consciência

`consc`

- `a` — Alerta
- `cvpu` — Confusão nova, responde à voz, à dor ou não responde

### Temperatura

`temp`

°C · intervalo: 30–44

## Edição do método

NEWS 2/Royal Collegeof Physicians December 2017:6 parâmetros,2 escalas Sp O 2,+2 oxigênio; sem NEWS 2012

## Fórmula documentada

FR: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂ escala 1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂ escala 2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (ou ≥ 93 em ar ambiente) = 0; 93–94 com O₂ = 1; 95–96 com O₂ = 2; ≥ 97 com O₂ = 3.

Oxigênio suplementar: 2.

PAS: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

FC: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

Consciência: alerta = 0; confusão nova, voz, dor ou sem resposta = 3.

Temperatura: ≤ 35,0 = 3; 35,1–36,0 = 1; 36,1–38,0 = 0; 38,1–39,0 = 1; ≥ 39,1 = 2.

## Limites e população

NEWS2 destina-se à avaliação de pessoas com 16 anos ou mais; não deve ser usado como escore validado em menores de 16 anos ou gestantes. Use a escala de SpO₂ 2 somente em insuficiência respiratória hipercápnica confirmada por gasometria na admissão atual ou anterior, com alvo de saturação de 88–92% prescrito e decisão de profissional clínico competente registrada. Nas demais situações, use a escala 1. O total apoia a avaliação de deterioração e não gera uma ordem assistencial automática.

## Referências

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Risco clínico baixo

| Detalhes do resultado | |
| --- | --- |
| Monitorização dos sinais vitais | no mínimo a cada 12 horas |
| FR · SpO₂ · O₂ · PAS · FC · consciência · temperatura | 0 · 0 · 0 · 0 · 0 · 0 · 0 |


### 2

Risco baixo-médio: um parâmetro isolado com 3 pontos pede avaliação médica urgente

| Detalhes do resultado | |
| --- | --- |
| Monitorização dos sinais vitais | no mínimo a cada 1 hora |
| FR · SpO₂ · O₂ · PAS · FC · consciência · temperatura | 0 · 0 · 0 · 0 · 0 · 3 · 0 |


### 3

Risco clínico médio: avaliação médica urgente

| Detalhes do resultado | |
| --- | --- |
| Monitorização dos sinais vitais | no mínimo a cada 1 hora |
| FR · SpO₂ · O₂ · PAS · FC · consciência · temperatura | 2 · 1 · 0 · 1 · 1 · 0 · 1 |


### 4

Risco clínico alto: resposta de emergência pela equipe de cuidados críticos

| Detalhes do resultado | |
| --- | --- |
| Monitorização dos sinais vitais | contínua |
| FR · SpO₂ · O₂ · PAS · FC · consciência · temperatura | 3 · 3 · 2 · 3 · 2 · 3 · 2 |


### 5

Risco clínico baixo: avaliação pela enfermagem

| Detalhes do resultado | |
| --- | --- |
| Monitorização dos sinais vitais | no mínimo a cada 4 a 6 horas |
| FR · SpO₂ · O₂ · PAS · FC · consciência · temperatura | 0 · 0 · 2 · 0 · 0 · 0 · 0 |

Escala 2 da SpO₂: use só em insuficiência respiratória hipercápnica confirmada, com alvo de 88 a 92% prescrito.


### 6

Risco clínico médio: avaliação médica urgente

| Detalhes do resultado | |
| --- | --- |
| Monitorização dos sinais vitais | no mínimo a cada 1 hora |
| FR · SpO₂ · O₂ · PAS · FC · consciência · temperatura | 0 · 3 · 2 · 0 · 0 · 0 · 0 |

Escala 2 da SpO₂: use só em insuficiência respiratória hipercápnica confirmada, com alvo de 88 a 92% prescrito.

