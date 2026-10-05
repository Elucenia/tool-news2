<!-- ELUCENIA technical documentation · news2 · en · no clinical/professional/rights approval -->

# NEWS2 (National Early Warning Score 2)

[conditions, sources and permissions](https://elucenia.org/en/tools/news2)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Respiratory rate

`fr`

breaths/min · range: 3–70

### SpO₂

`spo2`

% · range: 50–100

### SpO₂ scale

`escala`

- `1` — Scale 1 (standard)
- `2` — Scale 2 (confirmed hypercapnic respiratory failure; prescribed target 88–92%)

### Receiving oxygen?

`o2`

- `0` — Room air
- `1` — Supplemental oxygen

### Systolic blood pressure

`pas`

mmHg · range: 40–300

### Heart rate

`fc`

bpm · range: 20–250

### Level of consciousness

`consc`

- `a` — Alert
- `cvpu` — New confusion, responds to voice, responds to pain or unresponsive

### Temperature

`temp`

°C · range: 30–44

## Method edition

NEWS 2/Royal College of Physicians December 2017: 6 parameters, 2 SpO₂ scales, +2 oxygen; not NEWS 2012

## Documented formula

Respiratory rate: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂ scale 1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂ scale 2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (or ≥ 93 on room air) = 0; 93–94 with O₂ = 1; 95–96 with O₂ = 2; ≥ 97 with O₂ = 3.

Supplemental oxygen: 2.

Systolic blood pressure: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

Heart rate: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

Consciousness: alert = 0; new confusion, voice, pain or unresponsive = 3.

Temperature: ≤ 35.0 = 3; 35.1–36.0 = 1; 36.1–38.0 = 0; 38.1–39.0 = 1; ≥ 39.1 = 2.

## Limits and population

NEWS2 is intended for assessing people aged 16 years or older; it must not be used as a validated score in children under 16 or pregnant women. Use SpO₂ Scale 2 only for hypercapnic respiratory failure confirmed by blood gas analysis during the current or a previous admission, with a prescribed saturation target of 88–92% and a documented decision by a competent clinical professional. In other situations, use Scale 1. The total supports assessment of deterioration and does not generate an automatic care order.

## References

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
