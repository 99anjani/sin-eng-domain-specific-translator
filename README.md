# 🌾 Paddy Guardian – Sinhala to English Translation Module

> AI-powered domain-specific Sinhala → English translation system for paddy disease symptom identification.

## 📖 Overview

Paddy Guardian is an agricultural AI project developed to support Sri Lankan paddy farmers. This repository contains **Module 01**, a domain-specific translation system that translates paddy disease symptoms and agricultural terminology from Sinhala to English.

The model was built using **mBART-50** and fine-tuned with **LoRA (Low-Rank Adaptation)** on a custom agricultural dataset to improve translation accuracy for disease-related terminology.

---

## 🎯 Objectives

- Translate paddy disease symptoms from Sinhala to English.
- Preserve agricultural context and terminology.
- Support downstream AI-based disease prediction systems.
- Reduce language barriers for Sinhala-speaking farmers.

---

## ✨ Features

- 🌾 Domain-specific agricultural translation
- 🇱🇰 Sinhala → English translation
- ⚡ LoRA-based efficient fine-tuning
- 🔌 REST API using Flask
- 🖥️ React-based user interface
- 📊 BLEU Score Evaluation

---

## 🛠️ Technologies Used

- Python
- Flask
- React.js
- PyTorch
- Hugging Face Transformers
- PEFT (LoRA)
- mBART-50

---

## 🏗️ System Architecture

```text
React Frontend
      ↓
 Flask API
      ↓
 mBART-50 + LoRA
      ↓
 English Translation
```

---

## 📊 Results

| Metric | Value |
|----------|----------|
| Base Model | mBART-50 |
| Fine-Tuning Method | LoRA |
| Source Language | Sinhala (si_LK) |
| Target Language | English (en_XX) |
| BLEU Score | 26.55% |

---
## 📓 Training Notebook

The complete model training, LoRA fine-tuning, and BLEU score evaluation are available in the Google Colab notebook:

🔗 [Notebook](https://github.com/99anjani/sin-eng-domain-specific-translator-Notebook)
---

## 🚀 Run the Project

### Backend

```bash
pip install -r requirements.txt
python app.py
```

### Frontend

```bash
npm install
npm start
```

---

## 👩‍💻 My Contribution

As the **Team Lead of Module 01**, I was responsible for:

- Dataset collection and preprocessing
- mBART model fine-tuning
- LoRA implementation
- BLEU score evaluation
- Flask API development
- React frontend integration
- Testing and validation

---

## 📄 License

This project was developed for academic and research purposes as part of the **Paddy Guardian** initiative to support Sri Lankan paddy farmers through AI-powered agricultural solutions.
