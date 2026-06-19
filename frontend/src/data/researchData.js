// BLEU score progression across training epochs
export const bleuHistory = [
    { epoch: 1, bleu: 9.8 },
    { epoch: 2, bleu: 14.3 },
    { epoch: 3, bleu: 18.1 },
    { epoch: 4, bleu: 21.0 },
    { epoch: 5, bleu: 23.4 },
    { epoch: 6, bleu: 24.9 },
    { epoch: 7, bleu: 25.9 },
    { epoch: 8, bleu: 26.56 },
];

// Per-disease BLEU breakdown
export const diseaseBleu = [
    { disease: "Rice Blast", bleu: 47.2, samples: 312 },
    { disease: "Brown Spot", bleu: 44.8, samples: 278 },
    { disease: "Bacterial Blight", bleu: 41.3, samples: 245 },
    { disease: "Tungro", bleu: 38.6, samples: 189 },
];

// Model comparison
export const modelComparison = [
    { model: "Google Translate", bleu: 12.14, type: "general" },
    { model: "mBART-50 (base)", bleu: 13.17, type: "base" },
    { model: "mBART + LoRA (ours)", bleu: 24.4, type: "ours" },
    { model: "mBART full fine-tune", bleu: 26.5, type: "full" },
];

// LoRA config used
export const loraConfig = {
    rank: 16,
    alpha: 32,
    dropout: 0.05,
    targetModules: [
        "q_proj",
        "v_proj",
        "k_proj",
        "o_proj",
        "fc1",
        "fc2"
    ],
    trainableParams: "7.47M / 618.35M (1.21%)",
    baseModel: "facebook/mbart-large-50-many-to-many-mmt",
};

// Training config
export const trainingConfig = {
    epochs: 8,
    batchSize: 4,
    gradAccum: 4,
    effectiveBatch: 16,
    lr: "3e-4 (AdamW)",
    warmup: 200,
    weightDecay: 0.01,
    fp16: true,
    optimizer: "adamw_torch",
};

// Dataset stats
export const datasetStats = {
    trainSamples: 3282,
    medianSourceTokens: 14,
    diseases: 4,
    evaluationMetric: "SacreBLEU",
    modelType: "Sequence-to-Sequence Transformer",
    objective:
        "Domain-specific machine translation for agricultural symptom descriptions",
    limitations :[
        "The dataset is limited to paddy disease-related sentences and may not generalize well to other agricultural domains.",
        "Some grammatical inconsistencies remain in generated translations.",
        "Rare symptom descriptions and regional language variations are underrepresented in the dataset.",
        "Translation quality could be improved further with a larger parallel corpus and additional training data."
    ],
    translationDirection: "Sinhala → English",
    
    sources: ["Agricultural Research Center", "e-Thakshalawa", "DoA Sri Lanka", "Wahara (UOM)"],
};
