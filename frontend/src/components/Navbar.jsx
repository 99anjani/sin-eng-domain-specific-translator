export default function Navbar({ page, setPage }) {
    return (
        <nav className="border-b border-stone-800 bg-stone-950/90 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-green-700 flex items-center justify-center shadow-lg shadow-emerald-900/40">
                        <span className="text-white text-sm font-bold">ශ්‍රී</span>
                    </div>
                    <div>
                        <span className="font-semibold text-stone-100 tracking-tight">PaddyGardian</span>
                        <span className="hidden sm:inline text-stone-500 text-xs ml-2">Sinhala → English</span>
                    </div>
                </div>

                {/* Nav tabs */}
                <div className="flex items-center gap-1 bg-stone-900 rounded-lg p-1 border border-stone-800">
                    {[
                        { key: "translator", label: "Translator", icon: "⇌" },
                        { key: "research", label: "Research", icon: "◈" },
                    ].map(({ key, label, icon }) => (
                        <button
                            key={key}
                            onClick={() => setPage(key)}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${page === key
                                    ? "bg-emerald-600 text-white shadow-sm shadow-emerald-900"
                                    : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                                }`}
                        >
                            <span className="mr-1.5">{icon}</span>
                            {label}
                        </button>
                    ))}
                </div>

                {/* Status pill */}
                <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="hidden sm:inline">Module 1 — Active</span>
                </div>
            </div>
        </nav>
    );
}