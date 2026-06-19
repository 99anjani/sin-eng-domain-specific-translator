const CARDS = [
    {
        icon: "⇌",
        title: "Domain-Specific Translation",
        desc: "Fine-tuned on paddy agricultural vocabulary. Understands local Sinhala disease terminology that generic translators miss.",
        badge: "Module 1 · Active",
        badgeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/40",
    },
    {
        icon: "⬡",
        title: "Text-Based Disease Prediction",
        desc: "Classifies translated symptoms into disease categories using TF-IDF + Logistic Regression with dynamic Q&A fallback.",
        badge: "Module 2 · Integrated",
        badgeColor: "text-sky-400 bg-sky-950/60 border-sky-800/40",
    },
    {
        icon: "◎",
        title: "Image-Based Detection",
        desc: "Upload paddy leaf images for automated diagnosis via MobileNetV2 + ensemble classifier with Fuzzy C-Means segmentation.",
        badge: "Module 3 · Integrated",
        badgeColor: "text-violet-400 bg-violet-950/60 border-violet-800/40",
    },
];

export default function InfoCards() {
    return (
        <div>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">
                System modules
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CARDS.map((c) => (
                    <div
                        key={c.title}
                        className="bg-stone-900 border border-stone-800 rounded-xl p-5 hover:border-stone-700 transition-colors"
                    >
                        <div className="text-2xl mb-3">{c.icon}</div>
                        <h3 className="text-stone-100 font-semibold text-sm mb-1.5">{c.title}</h3>
                        <p className="text-stone-500 text-xs leading-relaxed mb-4">{c.desc}</p>
                        <span className={`inline-block text-[10px] font-bold border rounded px-2 py-0.5 uppercase tracking-wide ${c.badgeColor}`}>
                            {c.badge}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}