import { useState } from "react";

const API_URL = "http://127.0.0.1:5000/translate";

export default function TranslateBox({ inputText, setInputText }) {
    const [translatedText, setTranslatedText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const handleChange = (e) => {
        setInputText(e.target.value);
        setCharCount(e.target.value.length);
        if (error) setError("");
    };

    const handleTranslate = async () => {
        if (!inputText.trim()) return;
        setLoading(true);
        setTranslatedText("");
        setError("");

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: inputText }),
            });
            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            const data = await response.json();
            setTranslatedText(data.translation || "No translation returned.");
        } catch (err) {
            setError("Could not reach the translation API. Make sure the server is running on port 5000.");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (!translatedText) return;
        navigator.clipboard.writeText(translatedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClear = () => {
        setInputText("");
        setTranslatedText("");
        setError("");
        setCharCount(0);
    };

    const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") handleTranslate();
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-2xl shadow-black/40 mb-8">
            {/* ── Input panel ── */}
            <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-stone-800">
                <div className="flex items-center justify-between px-4 py-3 border-b border-stone-800">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Sinhala · si_LK</span>
                    </div>
                    <button
                        onClick={handleClear}
                        className="text-xs text-stone-500 hover:text-stone-300 transition-colors px-2 py-1 rounded hover:bg-stone-800"
                    >
                        Clear
                    </button>
                </div>

                <textarea
                    value={inputText}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="කසළ රෝගය නිසා කොළ කහ පාටට හැරෙනවා..."
                    className="flex-1 min-h-50 lg:min-h-70 bg-transparent text-stone-100 placeholder-stone-600 text-lg resize-none p-5 focus:outline-none font-sans leading-relaxed"
                    spellCheck={false}
                    aria-label="Sinhala input"
                    maxLength={500}
                />

                <div className="flex items-center justify-between px-4 py-3 border-t border-stone-800">
                    <span className="text-xs text-stone-600">{charCount}/500 chars</span>
                    <span className="text-xs text-stone-600 hidden sm:inline">Ctrl+Enter to translate</span>
                </div>
            </div>

            {/* ── Output panel ── */}
            <div className="flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-stone-800">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">English · en_XX</span>
                    </div>
                    {translatedText && (
                        <button
                            onClick={handleCopy}
                            className="text-xs text-stone-500 hover:text-stone-300 transition-colors px-2 py-1 rounded hover:bg-stone-800 flex items-center gap-1"
                        >
                            {copied ? "✓ Copied" : "Copy"}
                        </button>
                    )}
                </div>

                <div className="flex-1 min-h-50 lg:min-h-70 p-5 flex items-start">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                            <div className="flex gap-1.5">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"
                                        style={{ animationDelay: `${i * 0.15}s` }}
                                    />
                                ))}
                            </div>
                            <span className="text-stone-500 text-sm">Translating…</span>
                        </div>
                    ) : error ? (
                        <div className="w-full bg-red-950/40 border border-red-800/40 rounded-xl p-4">
                            <p className="text-red-400 text-sm font-medium mb-1">Connection error</p>
                            <p className="text-red-300/70 text-xs leading-relaxed">{error}</p>
                        </div>
                    ) : translatedText ? (
                        <p className="text-stone-100 text-lg leading-relaxed">{translatedText}</p>
                    ) : (
                        <p className="text-stone-600 text-base italic">Translation appears here…</p>
                    )}
                </div>

                <div className="px-4 py-3 border-t border-stone-800 text-xs text-stone-600">
                    mBART-large-50 + LoRA · Paddy domain fine-tuned
                </div>
            </div>

            {/* ── Translate button bar ── */}
            <div className="lg:col-span-2 border-t border-stone-800 px-5 py-4 flex items-center justify-between bg-stone-900/80">
                <p className="text-xs text-stone-500 hidden sm:block">
                    Specialized for paddy disease symptoms · Not a general-purpose translator
                </p>
                <button
                    onClick={handleTranslate}
                    disabled={loading || !inputText.trim()}
                    className="ml-auto flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-700 disabled:text-stone-500 disabled:cursor-not-allowed text-white transition-all duration-200 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50"
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Translating
                        </>
                    ) : (
                        <>
                            Translate
                            <span className="opacity-60 text-xs font-normal">⇌</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}