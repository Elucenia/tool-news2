<!-- ELUCENIA technical documentation · news2 · zh · no clinical/professional/rights approval -->

# NEWS2（国家早期预警评分 2）

[条件、来源与许可](https://elucenia.org/zh/tools/news2)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 呼吸频率

`fr`

次呼吸/分钟 · 范围: 3–70

### SpO₂

`spo2`

% · 范围: 50–100

### SpO₂ 评分尺度

`escala`

- `1` — 量表1（默认）
- `2` — 评分表2（已确认高碳酸血症性呼吸衰竭；已处方的目标范围88–92%）

### 是否正在吸氧？

`o2`

- `0` — 室内空气
- `1` — 补充氧气

### 收缩压

`pas`

mmHg · 范围: 40–300

### 心率

`fc`

次心搏/分钟 · 范围: 20–250

### 意识水平

`consc`

- `a` — 清醒
- `cvpu` — 新发意识混乱、对声音或疼痛有反应，或无反应

### 体温

`temp`

°C · 范围: 30–44

## 方法版本

NEWS 2/Royal College of Physicians 2017年12月：6参数、2个SpO₂量表、氧疗+2；非NEWS 2012

## 已记录的公式

呼吸频率: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂量表1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂量表2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (或 ≥ 93 呼吸室内空气) = 0; 93–94 吸入O₂时 = 1; 95–96 吸入O₂时 = 2; ≥ 97 吸入O₂时 = 3.

补充氧: 2.

收缩压: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

心率: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

意识: 清醒 = 0; 新发意识混乱、对声音或疼痛反应或无反应 = 3.

体温: ≤ 35.0 = 3; 35.1–36.0 = 1; 36.1–38.0 = 0; 38.1–39.0 = 1; ≥ 39.1 = 2.

## 限制与适用人群

NEWS2用于评估16岁及以上的人群；不应将其作为已获验证的评分用于16岁以下人群或孕妇。仅在本次或既往住院期间经血气分析确认存在高碳酸血症性呼吸衰竭、已医嘱设定88–92%的血氧饱和度目标、且已记录具备相应能力的临床专业人员的决定时，才使用SpO₂量表2。其他情况下使用量表1。总分辅助评估病情恶化，不会自动生成诊疗医嘱。

## 参考文献

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

临床风险低

| 结果详情 | |
| --- | --- |
| 生命体征监测 | 至少每 12 小时一次 |
| 呼吸频率 · SpO₂ · O₂ · 收缩压 · 心率 · 意识 · 体温 | 0 · 0 · 0 · 0 · 0 · 0 · 0 |


### 2

低至中等风险：单个参数得 3 分需要紧急医学评估

| 结果详情 | |
| --- | --- |
| 生命体征监测 | 至少每1小时 |
| 呼吸频率 · SpO₂ · O₂ · 收缩压 · 心率 · 意识 · 体温 | 0 · 0 · 0 · 0 · 0 · 3 · 0 |


### 3

中等临床风险：紧急医学评估

| 结果详情 | |
| --- | --- |
| 生命体征监测 | 至少每1小时 |
| 呼吸频率 · SpO₂ · O₂ · 收缩压 · 心率 · 意识 · 体温 | 2 · 1 · 0 · 1 · 1 · 0 · 1 |


### 4

高临床风险：重症监护团队紧急响应

| 结果详情 | |
| --- | --- |
| 生命体征监测 | 连续 |
| 呼吸频率 · SpO₂ · O₂ · 收缩压 · 心率 · 意识 · 体温 | 3 · 3 · 2 · 3 · 2 · 3 · 2 |


### 5

低临床风险：护理评估

| 结果详情 | |
| --- | --- |
| 生命体征监测 | 至少每4至6小时 |
| 呼吸频率 · SpO₂ · O₂ · 收缩压 · 心率 · 意识 · 体温 | 0 · 0 · 2 · 0 · 0 · 0 · 0 |

SpO₂ 2级：仅用于经确认的高碳酸血症性呼吸衰竭，处方目标为88至92%。


### 6

中等临床风险：紧急医学评估

| 结果详情 | |
| --- | --- |
| 生命体征监测 | 至少每1小时 |
| 呼吸频率 · SpO₂ · O₂ · 收缩压 · 心率 · 意识 · 体温 | 0 · 3 · 2 · 0 · 0 · 0 · 0 |

SpO₂ 2级：仅用于经确认的高碳酸血症性呼吸衰竭，处方目标为88至92%。

