<!-- ELUCENIA technical documentation · news2 · es · no clinical/professional/rights approval -->

# NEWS2 (puntuación nacional de alerta temprana 2)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/news2)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Frecuencia respiratoria

`fr`

respiraciones/min · intervalo: 3–70

### SpO₂

`spo2`

% · intervalo: 50–100

### Escala de SpO₂

`escala`

- `1` — Escala 1 (estándar)
- `2` — Escala 2 (insuficiencia respiratoria hipercápnica confirmada; objetivo prescrito 88–92%)

### ¿Recibe oxígeno?

`o2`

- `0` — Aire ambiente
- `1` — Oxígeno suplementario

### Presión sistólica

`pas`

mmHg · intervalo: 40–300

### Frecuencia cardíaca

`fc`

bpm · intervalo: 20–250

### Nivel de conciencia

`consc`

- `a` — Alerta
- `cvpu` — Confusión nueva, responde a la voz, al dolor o no responde

### Temperatura

`temp`

°C · intervalo: 30–44

## Edición del método

NEWS 2/Royal College of Physicians diciembre 2017: 6 parámetros, 2 escalas SpO₂, +2 oxígeno; sin NEWS 2012

## Fórmula documentada

FR: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂ escala 1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂ escala 2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (o ≥ 93 en aire ambiente) = 0; 93–94 con O₂ = 1; 95–96 con O₂ = 2; ≥ 97 con O₂ = 3.

Oxígeno suplementario: 2.

PAS: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

FC: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

Conciencia: alerta = 0; confusión nueva, voz, dolor o sin respuesta = 3.

Temperatura: ≤ 35,0 = 3; 35,1–36,0 = 1; 36,1–38,0 = 0; 38,1–39,0 = 1; ≥ 39,1 = 2.

## Límites y población

NEWS2 está destinado a evaluar a personas de 16 años o más; no debe utilizarse como puntuación validada en menores de 16 años o embarazadas. Use la escala de SpO₂ 2 solo en insuficiencia respiratoria hipercápnica confirmada mediante gasometría en el ingreso actual o en uno anterior, con un objetivo de saturación de 88–92% prescrito y una decisión documentada de un profesional clínico competente. En las demás situaciones, use la escala 1. El total apoya la evaluación del deterioro y no genera una orden asistencial automática.

## Referencias

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Riesgo clínico bajo

| Detalles del resultado | |
| --- | --- |
| Monitorización de los signos vitales | como mínimo cada 12 horas |
| FR · SpO₂ · O₂ · PAS · FC · conciencia · temperatura | 0 · 0 · 0 · 0 · 0 · 0 · 0 |


### 2

Riesgo bajo-medio: un parámetro aislado con 3 puntos requiere evaluación médica urgente

| Detalles del resultado | |
| --- | --- |
| Monitorización de los signos vitales | como mínimo cada 1 hora |
| FR · SpO₂ · O₂ · PAS · FC · conciencia · temperatura | 0 · 0 · 0 · 0 · 0 · 3 · 0 |


### 3

Riesgo clínico medio: evaluación médica urgente

| Detalles del resultado | |
| --- | --- |
| Monitorización de los signos vitales | como mínimo cada 1 hora |
| FR · SpO₂ · O₂ · PAS · FC · conciencia · temperatura | 2 · 1 · 0 · 1 · 1 · 0 · 1 |


### 4

Riesgo clínico alto: respuesta de emergencia del equipo de cuidados críticos

| Detalles del resultado | |
| --- | --- |
| Monitorización de los signos vitales | continua |
| FR · SpO₂ · O₂ · PAS · FC · conciencia · temperatura | 3 · 3 · 2 · 3 · 2 · 3 · 2 |


### 5

Riesgo clínico bajo: valoración de enfermería

| Detalles del resultado | |
| --- | --- |
| Monitorización de los signos vitales | como mínimo cada 4 a 6 horas |
| FR · SpO₂ · O₂ · PAS · FC · conciencia · temperatura | 0 · 0 · 2 · 0 · 0 · 0 · 0 |

Escala 2 de SpO₂: usar solo en insuficiencia respiratoria hipercápnica confirmada, con objetivo prescrito de 88 a 92%.


### 6

Riesgo clínico medio: evaluación médica urgente

| Detalles del resultado | |
| --- | --- |
| Monitorización de los signos vitales | como mínimo cada 1 hora |
| FR · SpO₂ · O₂ · PAS · FC · conciencia · temperatura | 0 · 3 · 2 · 0 · 0 · 0 · 0 |

Escala 2 de SpO₂: usar solo en insuficiencia respiratoria hipercápnica confirmada, con objetivo prescrito de 88 a 92%.

