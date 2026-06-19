import BleuChart from "../components/research/BleuChart";
import ModelComparisonChart from "../components/research/ModelComparisonChart";
import ModelConfig from "../components/research/ModelConfig";
import DatasetStats from "../components/research/DatasetStats";

const metrics = [
    {
        label: "BLEU Score",
        value: "26.56",
        sub: "Corpus BLEU (Test Set)",
        color: "text-emerald-400",
    },
    {
        label: "Dataset Size",
        value: "3,332",
        sub: "3,282 Train · 50 Test",
        color: "text-amber-400",
    },
    {
        label: "Trainable Params",
        value: "7.47M",
        sub: "1.21% of 618.35M",
        color: "text-violet-400",
    },
    {
        label: "Epochs",
        value: "8",
        sub: "AdamW · LR 3e-4",
        color: "text-sky-400",
    },
];

const keyFindings = [
    {
        title: "Parameter-Efficient Fine-Tuning",
        body: "LoRA successfully adapted the mBART-50 model while training only 7.47 million parameters (1.21% of the total model parameters).",
    },
    {
        title: "Domain-Specific Translation",
        body: "The model effectively learned paddy disease terminology and symptom descriptions commonly used by Sri Lankan farmers.",
    },
    {
        title: "Translation Quality",
        body: "The fine-tuned model achieved a BLEU score of 26.56, demonstrating effective adaptation to agricultural translation tasks.",
    },
    {
        title: "Resource Efficiency",
        body: "Combining LoRA with 8-bit quantization significantly reduced memory requirements while maintaining translation performance.",
    },
];

const limitations = [
    "The dataset is limited to paddy disease-related sentences and may not generalize effectively to other agricultural domains.",
    "Some grammatical inconsistencies remain in generated English translations despite successful domain adaptation.",
    "Rare symptom descriptions and regional Sinhala language variations are underrepresented in the training data.",
    "The model evaluation primarily relies on BLEU score. Additional metrics such as ROUGE, METEOR, and human evaluation could provide a more comprehensive assessment.",
    "The current system supports only Sinhala-to-English translation and does not yet support multilingual agricultural communication.",
];

export default function ResearchPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            {/* Header */}
            <section className="mb-12">
                <div className="inline-flex items-center gap-2 bg-violet-950/50 border border-violet-800/30 rounded-full px-4 py-1.5 text-violet-400 text-xs font-medium mb-5 tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    FINAL YEAR PROJECT · MODULE 01
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-stone-50 tracking-tight mb-4">
                    Domain-Specific Sinhala–English Translation for Paddy Disease Detection
                </h1>

                <p className="text-stone-400 max-w-4xl leading-relaxed">
                    This research investigates domain-specific machine translation for
                    agricultural applications by developing a Sinhala-to-English
                    translation model focused on paddy disease descriptions. Using the
                    multilingual mBART-50 architecture and LoRA-based parameter-efficient
                    fine-tuning, the system learns agricultural terminology and
                    symptom-related expressions commonly used by Sri Lankan farmers.
                </p>
            </section>

            {/* Metrics */}
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {metrics.map((metric) => (
                    <div
                        key={metric.label}
                        className="bg-stone-900 border border-stone-800 rounded-xl p-5"
                    >
                        <p className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                            {metric.label}
                        </p>
                        <p className={`text-3xl font-bold ${metric.color} mb-1`}>
                            {metric.value}
                        </p>
                        <p className="text-xs text-stone-600">{metric.sub}</p>
                    </div>
                ))}
            </section>

            {/* Dataset Statistics */}
           

            {/* Charts */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                    <h2 className="text-sm font-semibold text-stone-300 mb-2">
                        BLEU Score Analysis
                    </h2>
                    <p className="text-xs text-stone-500 mb-5">
                        Translation performance of the fine-tuned model.
                    </p>
                    <BleuChart />
                </div>

                <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                    <h2 className="text-sm font-semibold text-stone-300 mb-2">
                        Model Configuration Overview
                    </h2>
                    <p className="text-xs text-stone-500 mb-5">
                        Summary of the proposed translation architecture.
                    </p>
                    <ModelComparisonChart />
                </div>
            </section>

            {/* Model Config */}
            <ModelConfig />
            <DatasetStats />

            {/* Key Findings */}
            <section className="mt-8 bg-stone-900 border border-stone-800 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-stone-200 mb-5">
                    Key Findings
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {keyFindings.map((item) => (
                        <div
                            key={item.title}
                            className="border border-stone-800 rounded-lg p-4"
                        >
                            <h3 className="text-stone-200 font-medium mb-2">
                                {item.title}
                            </h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            
            {/* Reference */}
            <section className="mt-8 bg-stone-900/50 border border-stone-800 rounded-xl p-5">
                <h2 className="text-sm font-semibold text-stone-300 mb-3">
                    Reference
                </h2>

                <p className="text-xs text-stone-400 leading-relaxed">
                    Domain-Specific Sinhala-to-English Translation for Paddy Disease
                    Detection using mBART-50 and LoRA-based Parameter-Efficient Fine
                    Tuning. Final Year Project, Faculty of Information Technology,
                    University of Moratuwa.
                </p>
            </section>
        </main>
    );
}