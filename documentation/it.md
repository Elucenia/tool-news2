<!-- ELUCENIA technical documentation · news2 · it · no clinical/professional/rights approval -->

# NEWS2 (punteggio nazionale di allerta precoce 2)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/news2)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Frequenza respiratoria

`fr`

atti/min · intervallo: 3–70

### SpO₂

`spo2`

% · intervallo: 50–100

### Scala SpO₂

`escala`

- `1` — Scala 1 (standard)
- `2` — Scala 2 (insufficienza respiratoria ipercapnica confermata; obiettivo prescritto 88–92%)

### Riceve ossigeno?

`o2`

- `0` — Aria ambiente
- `1` — Ossigeno supplementare

### Pressione sistolica

`pas`

mmHg · intervallo: 40–300

### Frequenza cardiaca

`fc`

bpm · intervallo: 20–250

### Livello di coscienza

`consc`

- `a` — Vigile
- `cvpu` — Nuova confusione, risposta alla voce, al dolore o nessuna risposta

### Temperatura

`temp`

°C · intervallo: 30–44

## Edizione del metodo

NEWS 2/Royal College of Physicians dicembre 2017: 6 parametri, 2 scale SpO₂, +2 ossigeno; non NEWS 2012

## Formula documentata

FR: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂ scala 1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂ scala 2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (o ≥ 93 in aria ambiente) = 0; 93–94 con O₂ = 1; 95–96 con O₂ = 2; ≥ 97 con O₂ = 3.

Ossigeno supplementare: 2.

PAS: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

FC: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

Coscienza: vigile = 0; nuova confusione, voce, dolore o nessuna risposta = 3.

Temperatura: ≤ 35,0 = 3; 35,1–36,0 = 1; 36,1–38,0 = 0; 38,1–39,0 = 1; ≥ 39,1 = 2.

## Limiti e popolazione

NEWS2 è destinato alla valutazione di persone di 16 anni o più; non deve essere usato come punteggio validato nei minori di 16 anni o nelle donne in gravidanza. Usare la scala di SpO₂ 2 solo in caso di insufficienza respiratoria ipercapnica confermata mediante emogasanalisi durante il ricovero attuale o un ricovero precedente, con un obiettivo di saturazione di 88–92% prescritto e una decisione documentata di un professionista clinico competente. Nelle altre situazioni, usare la scala 1. Il totale supporta la valutazione del deterioramento e non genera un ordine assistenziale automatico.

## Riferimenti

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
