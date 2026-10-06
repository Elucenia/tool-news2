<!-- ELUCENIA technical documentation · news2 · de · no clinical/professional/rights approval -->

# NEWS2 (National Early Warning Score 2)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/news2)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Atemfrequenz

`fr`

Atemzüge/min · Bereich: 3–70

### SpO₂

`spo2`

% · Bereich: 50–100

### SpO₂-Skala

`escala`

- `1` — Skala 1 (Standard)
- `2` — Skala 2 (bestätigte hyperkapnische respiratorische Insuffizienz; verordneter Zielbereich 88–92 %)

### Sauerstoffgabe?

`o2`

- `0` — Raumluft
- `1` — Zusätzlicher Sauerstoff

### Systolischer Blutdruck

`pas`

mmHg · Bereich: 40–300

### Herzfrequenz

`fc`

bpm · Bereich: 20–250

### Bewusstseinslage

`consc`

- `a` — Wach
- `cvpu` — Neue Verwirrtheit, Reaktion auf Ansprache, auf Schmerz oder keine Reaktion

### Temperatur

`temp`

°C · Bereich: 30–44

## Fassung der Methode

NEWS 2/Royal College of Physicians Dezember 2017: 6 Parameter, 2 SpO₂-Skalen, +2 Sauerstoff; nicht NEWS 2012

## Dokumentierte Formel

Atemfrequenz: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂ Skala 1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂ Skala 2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (oder ≥ 93 unter Raumluft) = 0; 93–94 mit O₂ = 1; 95–96 mit O₂ = 2; ≥ 97 mit O₂ = 3.

Zusätzlicher Sauerstoff: 2.

Systolischer Blutdruck: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

Herzfrequenz: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

Bewusstsein: wach = 0; neue Verwirrtheit, Reaktion auf Ansprache, Schmerz oder keine Reaktion = 3.

Temperatur: ≤ 35,0 = 3; 35,1–36,0 = 1; 36,1–38,0 = 0; 38,1–39,0 = 1; ≥ 39,1 = 2.

## Grenzen und Population

NEWS2 dient der Beurteilung von Personen ab 16 Jahren; es darf nicht als validierter Score bei unter 16-Jährigen oder Schwangeren verwendet werden. Verwenden Sie SpO₂-Skala 2 nur bei hyperkapnischer respiratorischer Insuffizienz, die durch eine Blutgasanalyse während der aktuellen oder einer früheren Krankenhausaufnahme bestätigt wurde, mit einem verordneten Sättigungsziel von 88–92% und einer dokumentierten Entscheidung einer kompetenten klinischen Fachperson. In allen anderen Situationen ist Skala 1 zu verwenden. Die Summe unterstützt die Beurteilung einer Verschlechterung und erzeugt keine automatische Behandlungsanordnung.

## Referenzen

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Niedriges klinisches Risiko

| Ergebnisdetails | |
| --- | --- |
| Überwachung der Vitalzeichen | mindestens alle 12 Stunden |
| AF · SpO₂ · O₂ · syst. RR · HF · Bewusstsein · Temperatur | 0 · 0 · 0 · 0 · 0 · 0 · 0 |


### 2

Niedriges bis mittleres Risiko: Ein isolierter Parameter mit 3 Punkten erfordert eine dringende ärztliche Beurteilung

| Ergebnisdetails | |
| --- | --- |
| Überwachung der Vitalzeichen | mindestens alle 1 Stunde |
| AF · SpO₂ · O₂ · syst. RR · HF · Bewusstsein · Temperatur | 0 · 0 · 0 · 0 · 0 · 3 · 0 |


### 3

Mittleres klinisches Risiko: dringliche ärztliche Beurteilung

| Ergebnisdetails | |
| --- | --- |
| Überwachung der Vitalzeichen | mindestens alle 1 Stunde |
| AF · SpO₂ · O₂ · syst. RR · HF · Bewusstsein · Temperatur | 2 · 1 · 0 · 1 · 1 · 0 · 1 |


### 4

Hohes klinisches Risiko: Notfallreaktion durch das Intensivteam

| Ergebnisdetails | |
| --- | --- |
| Überwachung der Vitalzeichen | kontinuierlich |
| AF · SpO₂ · O₂ · syst. RR · HF · Bewusstsein · Temperatur | 3 · 3 · 2 · 3 · 2 · 3 · 2 |


### 5

Niedriges klinisches Risiko: pflegerische Beurteilung

| Ergebnisdetails | |
| --- | --- |
| Überwachung der Vitalzeichen | mindestens alle 4 bis 6 Stunden |
| AF · SpO₂ · O₂ · syst. RR · HF · Bewusstsein · Temperatur | 0 · 0 · 2 · 0 · 0 · 0 · 0 |

SpO₂-Skala 2: nur bei bestätigtem hyperkapnischem Atemversagen verwenden, mit verordnetem Ziel von 88 bis 92 %.


### 6

Mittleres klinisches Risiko: dringliche ärztliche Beurteilung

| Ergebnisdetails | |
| --- | --- |
| Überwachung der Vitalzeichen | mindestens alle 1 Stunde |
| AF · SpO₂ · O₂ · syst. RR · HF · Bewusstsein · Temperatur | 0 · 3 · 2 · 0 · 0 · 0 · 0 |

SpO₂-Skala 2: nur bei bestätigtem hyperkapnischem Atemversagen verwenden, mit verordnetem Ziel von 88 bis 92 %.

