<!-- ELUCENIA technical documentation · news2 · hi · no clinical/professional/rights approval -->

# NEWS2 (नेशनल अर्ली वार्निंग स्कोर 2)

[शर्तें, स्रोत और अनुमतियाँ](https://elucenia.org/hi/tools/news2)

## उपयोग कैसे करें

पोर्टल पर उपकरण का उपयोग करें या स्थानीय HTTP सर्वर के माध्यम से index.html खोलें। भाषा चुनें, फ़ील्ड भरें और गणना करें।

## इनपुट और इकाइयाँ

### श्वसन दर

`fr`

साँस/मिनट · सीमा: 3–70

### SpO₂

`spo2`

% · सीमा: 50–100

### SpO₂ स्केल

`escala`

- `1` — स्केल 1 (मानक)
- `2` — स्केल 2 (हाइपरकैपनिक श्वसन विफलता की पुष्टि; निर्धारित लक्ष्य 88–92%)

### क्या ऑक्सीजन दी जा रही है?

`o2`

- `0` — कमरे की हवा
- `1` — अतिरिक्त ऑक्सीजन

### सिस्टोलिक दबाव

`pas`

mmHg · सीमा: 40–300

### हृदय गति

`fc`

धड़कन/मिनट · सीमा: 20–250

### चेतना का स्तर

`consc`

- `a` — सतर्क
- `cvpu` — नया भ्रम, आवाज़ या दर्द पर प्रतिक्रिया, या कोई प्रतिक्रिया नहीं

### तापमान

`temp`

°C · सीमा: 30–44

## विधि का संस्करण

NEWS 2/Royal College of Physicians दिसंबर2017: 6 पैरामीटर, 2 SpO₂ स्केल, +2 ऑक्सीजन; NEWS 2012 नहीं

## दस्तावेज़ित सूत्र

श्वसन दर: ≤ 8 = 3; 9–11 = 1; 12–20 = 0; 21–24 = 2; ≥ 25 = 3.

SpO₂ स्केल1: ≤ 91 = 3; 92–93 = 2; 94–95 = 1; ≥ 96 = 0.

SpO₂ स्केल2: ≤ 83 = 3; 84–85 = 2; 86–87 = 1; 88–92 (या ≥ 93 कमरे की हवा में) = 0; 93–94 O₂ के साथ = 1; 95–96 O₂ के साथ = 2; ≥ 97 O₂ के साथ = 3.

अतिरिक्त ऑक्सीजन: 2.

सिस्टोलिक रक्तचाप: ≤ 90 = 3; 91–100 = 2; 101–110 = 1; 111–219 = 0; ≥ 220 = 3.

हृदय दर: ≤ 40 = 3; 41–50 = 1; 51–90 = 0; 91–110 = 1; 111–130 = 2; ≥ 131 = 3.

चेतना: सचेत = 0; नया भ्रम, आवाज़ या दर्द पर प्रतिक्रिया अथवा प्रतिक्रिया नहीं = 3.

तापमान: ≤ 35.0 = 3; 35.1–36.0 = 1; 36.1–38.0 = 0; 38.1–39.0 = 1; ≥ 39.1 = 2.

## सीमाएँ और जनसमूह

NEWS2 का उद्देश्य 16 वर्ष या उससे अधिक आयु के लोगों का आकलन है; इसे 16 वर्ष से कम आयु के लोगों या गर्भवती महिलाओं में सत्यापित स्कोर के रूप में उपयोग नहीं करना चाहिए। SpO₂ स्केल 2 का उपयोग केवल तब करें जब वर्तमान या पिछले अस्पताल प्रवेश के दौरान रक्त गैस विश्लेषण से हाइपरकैप्निक श्वसन विफलता की पुष्टि हुई हो, 88–92% का संतृप्ति लक्ष्य निर्धारित किया गया हो और सक्षम नैदानिक पेशेवर का निर्णय दर्ज हो। अन्य स्थितियों में स्केल 1 का उपयोग करें। कुल स्कोर बिगड़ती स्थिति के आकलन में सहायक है और अपने आप देखभाल का आदेश नहीं देता।

## संदर्भ

- [Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres, 2017.](https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/)

- [Smith GB et al. The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation, 2013.](https://doi.org/10.1016/j.resuscitation.2012.12.016)

- [Pimentel MAF et al. A comparison of the ability of the National Early Warning Score and the National Early Warning Score 2 to identify patients at risk of in-hospital mortality: a multi-centre database study. Resuscitation, 2019.](https://doi.org/10.1016/j.resuscitation.2018.09.026)

- [RCP NEWS2 December2017](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)

- [RCP NRAP COPD clinical audit dataset v6.2 May2025](https://www.rcp.ac.uk/media/0obnabyj/nrap-copd-clinical-audit-dataset-v62-may-2025-final.pdf)

- [RCP Acute care toolkit15 November2019](https://www.rcp.ac.uk/media/pnsglw10/acute-care-toolkit-15_act_pregnancy_nov19_0.pdf)

## तकनीकी परीक्षण दोहराएँ

दर्ज कृत्रिम मामलों को दोहराने के लिए इस रिपॉज़िटरी की मूल निर्देशिका में node test.cjs चलाएँ। मूल इनपुट, अपेक्षित परिणाम और सहनशीलता सीमाएँ सुरक्षित रखी गई हैं। तकनीकी परीक्षण नैदानिक सत्यापन नहीं हैं।

```sh
node test.cjs
```

tool.json में स्रोत, संस्करण और समीक्षा का दायरा दिया गया है। examples.json में कृत्रिम इनपुट और अपेक्षित परिणाम सुरक्षित हैं; results.json में प्राप्त परिणाम दर्ज हैं।

[रिकॉर्ड और संदर्भ](../tool.json) · [JavaScript कोड](../calculator.js) · [संदर्भ मामले](../examples.json) · [results.json](../results.json)

## समीक्षा और उपयोग की शर्तें

स्वतंत्र नैदानिक समीक्षा नहीं की गई है।

यह इंटरफ़ेस लेखकों द्वारा किया गया अनुवाद है, कोई आधिकारिक या प्रमाणित संस्करण नहीं। स्वतंत्र नैदानिक समीक्षा, पेशेवर भाषाई समीक्षा और उपकरणों के अधिकारों की अनुमति की प्रक्रिया पूरी नहीं हुई है।

सूत्र या वर्गीकरण का परिणाम। व्याख्या, कार्यवाही और उपयुक्तता पेशेवर मूल्यांकन और चुने गए स्रोत पर निर्भर है।

## लाइसेंस और श्रेय

Apache-2.0 केवल ELUCENIA के कोड पर लागू होता है। उपकरणों, प्रकाशनों, अनुवादों और डेटा के अधिकार उनके संबंधित अधिकारधारकों के पास रहते हैं। LICENSE और NOTICE सुरक्षित रखें।

ELUCENIA · Felipe Guedes · Copyright © 2026
