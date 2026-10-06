<!-- ELUCENIA technical documentation · news2 · fr · no clinical/professional/rights approval -->

# NEWS2 (score national d’alerte précoce 2)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/news2)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Fréquence respiratoire

`fr`

respirations/min · intervalle: 3–70

### SpO₂

`spo2`

% · intervalle: 50–100

### Échelle de SpO₂

`escala`

- `1` — Échelle 1 (standard)
- `2` — Échelle 2 (insuffisance respiratoire hypercapnique confirmée ; cible prescrite 88–92 %)

### Sous oxygène ?

`o2`

- `0` — Air ambiant
- `1` — Oxygène supplémentaire

### Pression systolique

`pas`

mmHg · intervalle: 40–300

### Fréquence cardiaque

`fc`

bpm · intervalle: 20–250

### Niveau de conscience

`consc`

- `a` — Alerte
- `cvpu` — Confusion nouvelle, réponse à la voix, à la douleur ou aucune réponse

### Température

`temp`

°C · intervalle: 30–44

## Édition de la méthode

NEWS 2/Royal College of Physicians décembre 2017 : 6 paramètres, 2 échelles SpO₂, +2 oxygène ; sans NEWS 2012

## Formule documentée

FR: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂ échelle 1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂ échelle 2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (ou ≥ 93 en air ambiant) = 0; 93–94 avec O₂ = 1; 95–96 avec O₂ = 2; ≥ 97 avec O₂ = 3.

Oxygène supplémentaire: 2.

PAS: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

FC: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

Conscience: alerte = 0; confusion nouvelle, voix, douleur ou sans réponse = 3.

Température: ≤ 35,0 = 3; 35,1–36,0 = 1; 36,1–38,0 = 0; 38,1–39,0 = 1; ≥ 39,1 = 2.

## Limites et population

NEWS2 est destiné à l’évaluation des personnes âgées de 16 ans ou plus ; il ne doit pas être utilisé comme score validé chez les moins de 16 ans ou les femmes enceintes. Utilisez l’échelle de SpO₂ 2 uniquement en cas d’insuffisance respiratoire hypercapnique confirmée par gazométrie lors de l’hospitalisation actuelle ou d’une hospitalisation antérieure, avec une cible de saturation de 88–92% prescrite et une décision documentée d’un professionnel clinique compétent. Dans les autres situations, utilisez l’échelle 1. Le total appuie l’évaluation de la détérioration et ne génère pas d’ordre de soins automatique.

## Références

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Risque clinique faible

| Détails du résultat | |
| --- | --- |
| Surveillance des signes vitaux | au moins toutes les 12 heures |
| FR · SpO₂ · O₂ · PAS · FC · conscience · température | 0 · 0 · 0 · 0 · 0 · 0 · 0 |


### 2

Risque faible à modéré : un paramètre isolé à 3 points nécessite une évaluation médicale urgente

| Détails du résultat | |
| --- | --- |
| Surveillance des signes vitaux | au minimum toutes les 1 heure |
| FR · SpO₂ · O₂ · PAS · FC · conscience · température | 0 · 0 · 0 · 0 · 0 · 3 · 0 |


### 3

Risque clinique modéré : évaluation médicale urgente

| Détails du résultat | |
| --- | --- |
| Surveillance des signes vitaux | au minimum toutes les 1 heure |
| FR · SpO₂ · O₂ · PAS · FC · conscience · température | 2 · 1 · 0 · 1 · 1 · 0 · 1 |


### 4

Risque clinique élevé : intervention d’urgence par l’équipe de soins intensifs

| Détails du résultat | |
| --- | --- |
| Surveillance des signes vitaux | continue |
| FR · SpO₂ · O₂ · PAS · FC · conscience · température | 3 · 3 · 2 · 3 · 2 · 3 · 2 |


### 5

Risque clinique faible : évaluation infirmière

| Détails du résultat | |
| --- | --- |
| Surveillance des signes vitaux | au minimum toutes les 4 à 6 heures |
| FR · SpO₂ · O₂ · PAS · FC · conscience · température | 0 · 0 · 2 · 0 · 0 · 0 · 0 |

Échelle 2 de SpO₂ : à utiliser uniquement en cas d’insuffisance respiratoire hypercapnique confirmée, avec une cible prescrite de 88 à 92 %.


### 6

Risque clinique modéré : évaluation médicale urgente

| Détails du résultat | |
| --- | --- |
| Surveillance des signes vitaux | au minimum toutes les 1 heure |
| FR · SpO₂ · O₂ · PAS · FC · conscience · température | 0 · 3 · 2 · 0 · 0 · 0 · 0 |

Échelle 2 de SpO₂ : à utiliser uniquement en cas d’insuffisance respiratoire hypercapnique confirmée, avec une cible prescrite de 88 à 92 %.

