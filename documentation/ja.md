<!-- ELUCENIA technical documentation · news2 · ja · no clinical/professional/rights approval -->

# NEWS2（早期警告スコア2）

[条件・出典・許諾](https://elucenia.org/ja/tools/news2)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 呼吸数

`fr`

呼吸/分 · 範囲: 3–70

### SpO₂

`spo2`

% · 範囲: 50–100

### SpO₂ のスケール

`escala`

- `1` — スケール1（標準）
- `2` — スケール2（確認された高二酸化炭素血症性呼吸不全；処方された目標範囲88–92%）

### 酸素を使用していますか？

`o2`

- `0` — 室内気
- `1` — 酸素補給

### 収縮期血圧

`pas`

mmHg · 範囲: 40–300

### 心拍数

`fc`

拍/分 · 範囲: 20–250

### 意識レベル

`consc`

- `a` — 清明
- `cvpu` — 新たな錯乱，呼びかけ・痛みへの反応，または無反応

### 体温

`temp`

°C · 範囲: 30–44

## 方法の版

NEWS 2/Royal College of Physicians 2017年12月：6指標、2つのSpO₂スケール、酸素+2；NEWS 2012ではない

## 記載された計算式

呼吸数: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂スケール1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂スケール2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (または ≥ 93 室内気) = 0; 93–94 O₂使用時 = 1; 95–96 O₂使用時 = 2; ≥ 97 O₂使用時 = 3.

酸素補給: 2.

収縮期血圧: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

心拍数: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

意識: 清明 = 0; 新規の混乱、呼びかけ反応、痛み反応または無反応 = 3.

体温: ≤ 35.0 = 3; 35.1–36.0 = 1; 36.1–38.0 = 0; 38.1–39.0 = 1; ≥ 39.1 = 2.

## 限界・対象集団

NEWS2は16歳以上の人の評価を目的としています。16歳未満の人や妊婦に、妥当性が検証されたスコアとして使用してはいけません。SpO₂スケール2は、今回または過去の入院中の血液ガス分析で高二酸化炭素血症性呼吸不全が確認され、酸素飽和度の目標88–92%が指示され、適切な能力を持つ臨床専門職の判断が記録されている場合にのみ使用してください。その他の場合はスケール1を使用してください。合計点は状態悪化の評価を補助するものであり、診療指示を自動的に生成するものではありません。

## 参考文献

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 記録された結果

以下の情報は、合成例に対する手法の出力を保持したものです。独立した臨床的検証を示すものではありません。

### 1

臨床リスクが低い

| 結果の詳細 | |
| --- | --- |
| バイタルサインのモニタリング | 少なくとも12時間ごと |
| 呼吸数 · SpO₂ · O₂ · 収縮期血圧 · 心拍数 · 意識 · 体温 | 0 · 0 · 0 · 0 · 0 · 0 · 0 |


### 2

低～中等リスク：単独の1項目が3点の場合、緊急の医師評価が必要

| 結果の詳細 | |
| --- | --- |
| バイタルサインのモニタリング | 少なくとも1時間ごと |
| 呼吸数 · SpO₂ · O₂ · 収縮期血圧 · 心拍数 · 意識 · 体温 | 0 · 0 · 0 · 0 · 0 · 3 · 0 |


### 3

中等度の臨床リスク：緊急の医師による評価

| 結果の詳細 | |
| --- | --- |
| バイタルサインのモニタリング | 少なくとも1時間ごと |
| 呼吸数 · SpO₂ · O₂ · 収縮期血圧 · 心拍数 · 意識 · 体温 | 2 · 1 · 0 · 1 · 1 · 0 · 1 |


### 4

高い臨床リスク：集中治療チームによる緊急対応

| 結果の詳細 | |
| --- | --- |
| バイタルサインのモニタリング | 継続的 |
| 呼吸数 · SpO₂ · O₂ · 収縮期血圧 · 心拍数 · 意識 · 体温 | 3 · 3 · 2 · 3 · 2 · 3 · 2 |


### 5

低い臨床リスク：看護師による評価

| 結果の詳細 | |
| --- | --- |
| バイタルサインのモニタリング | 少なくとも4～6時間ごと |
| 呼吸数 · SpO₂ · O₂ · 収縮期血圧 · 心拍数 · 意識 · 体温 | 0 · 0 · 2 · 0 · 0 · 0 · 0 |

SpO₂スケール2：確認された高炭酸ガス血症性呼吸不全にのみ使用し、88～92%の目標を処方する。


### 6

中等度の臨床リスク：緊急の医師による評価

| 結果の詳細 | |
| --- | --- |
| バイタルサインのモニタリング | 少なくとも1時間ごと |
| 呼吸数 · SpO₂ · O₂ · 収縮期血圧 · 心拍数 · 意識 · 体温 | 0 · 3 · 2 · 0 · 0 · 0 · 0 |

SpO₂スケール2：確認された高炭酸ガス血症性呼吸不全にのみ使用し、88～92%の目標を処方する。

