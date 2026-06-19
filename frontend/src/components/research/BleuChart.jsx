import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { bleuHistory } from '../../data/researchData'

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-xs shadow-xl">
            <p className="text-stone-400 mb-1">Epoch {label}</p>
            {payload.map((p) => (
                <p key={p.name} style={{ color: p.color }} className="font-semibold">
                    {p.name}: {p.value}
                </p>
            ))}
        </div>
    );
};

export default function BleuChart() {
    return (
        <ResponsiveContainer width="100%" height={220}>
            <LineChart data={bleuHistory} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                <XAxis dataKey="epoch" tick={{ fill: "#78716c", fontSize: 11 }} label={{ value: "Epoch", position: "insideBottom", offset: -2, fill: "#78716c", fontSize: 11 }} />
                <YAxis tick={{ fill: "#78716c", fontSize: 11 }} domain={[0, 50]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    wrapperStyle={{ fontSize: 11, color: "#a8a29e", paddingTop: 8 }}
                    formatter={(v) => v === "bleu" ? "LoRA Fine-tuned" : "Google Translate"}
                />
                <Line type="monotone" dataKey="bleu" stroke="#34d399" strokeWidth={2.5} dot={{ fill: "#34d399", r: 3 }} activeDot={{ r: 5 }} name="bleu" />
                <Line type="monotone" dataKey="baseline" stroke="#78716c" strokeWidth={1.5} strokeDasharray="5 4" dot={false} name="baseline" />
            </LineChart>
        </ResponsiveContainer>
    );
}