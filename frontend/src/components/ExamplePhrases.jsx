const EXAMPLES = [
    { si: "කොළ කහ පාටට හැරෙනවා", disease: "Blast", en_hint: "Leaf yellowing" },
    { si: "කසළ රෝගය නිසා අස්වැන්න අඩු වෙනවා", disease: "Bacterial Blight", en_hint: "Yield loss" },
    { si: "දුඹුරු පැහැ ලප කොළ මත දිස් වෙනවා", disease: "Brown Spot", en_hint: "Brown lesions" },
    { si: "ශාකය මැලවී යයි", disease: "Tungro", en_hint: "Wilting" },
];

export default function ExamplePhrases({ onSelect }) {
    return (
        <div className="mb-10">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">
                Try an example
            </p>
            <div className="flex flex-wrap gap-2">
                {EXAMPLES.map((ex) => (
                    <button
                        key={ex.si}
                        onClick={() => onSelect(ex.si)}
                        className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 hover:border-emerald-700/60 hover:bg-stone-800 transition-all duration-150 text-left"
                    >
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-950/60 rounded px-1.5 py-0.5 uppercase tracking-wide whitespace-nowrap">
                            {ex.disease}
                        </span>
                        <span className="text-stone-300 text-sm group-hover:text-stone-100 transition-colors truncate max-w-45">
                            {ex.si}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}