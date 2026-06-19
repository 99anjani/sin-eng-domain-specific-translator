import { datasetStats } from "../../data/researchData";

export default function DatasetStats() {
    const stats = [
        {
            label: "Training Samples",
            value: datasetStats.trainSamples.toLocaleString(),
        },
        {
            label: "Median Tokens",
            value: datasetStats.medianSourceTokens,
        },
        {
            label: "Disease Classes",
            value: datasetStats.diseases,
        },
        {
            label: "Evaluation",
            value: datasetStats.evaluationMetric,
        },
    ];

    return (
        <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
            <h2 className="text-sm font-semibold text-stone-300 mb-1">
                Dataset & Research Statistics
            </h2>

            <p className="text-xs text-stone-500 mb-5">
                Domain-specific Sinhala-English translation dataset for paddy disease symptom descriptions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="bg-stone-800/50 rounded-lg p-3"
                    >
                        <p className="text-[10px] text-stone-500 uppercase tracking-wide mb-1">
                            {item.label}
                        </p>
                        <p className="text-lg font-bold text-stone-100">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Research Details */}
            <div className="space-y-4 mb-5">
                <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wide mb-1">
                        Translation Direction
                    </p>
                    <p className="text-sm text-stone-300">
                        {datasetStats.translationDirection}
                    </p>
                </div>

                <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wide mb-1">
                        Model Type
                    </p>
                    <p className="text-sm text-stone-300">
                        {datasetStats.modelType}
                    </p>
                </div>

                <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wide mb-1">
                        Research Objective
                    </p>
                    <p className="text-sm text-stone-400 leading-relaxed">
                        {datasetStats.objective}
                    </p>
                </div>
                <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wide mb-2">
                        Data Limitations
                    </p>

                    <ul className="space-y-2">
                        {datasetStats.limitations.map((limitation) => (
                            <li
                                key={limitation}
                                className="text-xs text-stone-400 flex items-center gap-2"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-stone-600 shrink-0"></span>
                                {limitation}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Disease Categories */}
            <div className="mb-5">
                <p className="text-[10px] text-stone-500 uppercase tracking-wide mb-2">
                    Disease Categories
                </p>

                <div className="flex flex-wrap gap-2">
                    {[
                        "Rice Blast",
                        "Brown Spot",
                        "Bacterial Blight",
                        "Tungro",
                    ].map((disease) => (
                        <span
                            key={disease}
                            className="text-[10px] font-medium bg-emerald-950/50 border border-emerald-900/40 text-emerald-400 rounded px-2 py-1"
                        >
                            {disease}
                        </span>
                    ))}
                </div>
            </div>

            {/* Data Sources */}
            <div>
                <p className="text-[10px] text-stone-500 uppercase tracking-wide mb-2">
                    Data Sources
                </p>

                <ul className="space-y-2">
                    {datasetStats.sources.map((source) => (
                        <li
                            key={source}
                            className="text-xs text-stone-400 flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-600 shrink-0"></span>
                            {source}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}