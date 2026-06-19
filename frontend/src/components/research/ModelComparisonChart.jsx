import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer,
} from "recharts";
import { modelComparison } from "../../data/researchData";

const COLORS = {
    general: "#78716c",
    base: "#0ea5e9",
    ours: "#34d399",
    full: "#a78bfa",
};

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    return (
        <div className="bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-xs shadow-xl">
            <p className="text-stone-200 font-semibold mb-1">{d.model}</p>
            <p style={{ color: COLORS[d.type] }}>BLEU: {d.bleu}</p>
        </div>
    );
};

export default function ModelComparisonChart() {
    return (
        <ResponsiveContainer width="100%" height={220}>
            <BarChart data={modelComparison} margin={{ top: 4, right: 8, left: -20, bottom: 24 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />
                <XAxis
                    dataKey="model"
                    tick={{ fill: "#78716c", fontSize: 10 }}
                    angle={-12}
                    textAnchor="end"
                    height={48}
                />
                <YAxis tick={{ fill: "#78716c", fontSize: 11 }} domain={[0, 30]} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "#1c1917" }} />
                <Bar dataKey="bleu" radius={[4, 4, 0, 0]} maxBarSize={56}>
                    {modelComparison.map((entry) => (
                        <Cell key={entry.model} fill={COLORS[entry.type]} opacity={entry.type === "ours" ? 1 : 0.65} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}