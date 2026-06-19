import { loraConfig, trainingConfig } from "../../data/researchData";

function ConfigRow({ label, value }) {
    return (
        <div className="flex justify-between items-start py-2.5 border-b border-stone-800 last:border-0">
            <span className="text-xs text-stone-500 font-medium">{label}</span>
            <span className="text-xs text-stone-300 text-right font-mono max-w-[55%] break-all">{value}</span>
        </div>
    );
}

export default function ModelConfig() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                <h2 className="text-sm font-semibold text-stone-300 mb-1">LoRA Configuration</h2>
                <p className="text-xs text-stone-500 mb-4">Low-Rank Adaptation hyperparameters</p>
                <ConfigRow label="Base Model" value={loraConfig.baseModel} />
                <ConfigRow label="Rank (r)" value={loraConfig.rank} />
                <ConfigRow label="Alpha (α)" value={loraConfig.alpha} />
                <ConfigRow label="Dropout" value={loraConfig.dropout} />
                <ConfigRow label="Target Modules" value={loraConfig.targetModules.join(", ")} />
                <ConfigRow label="Trainable Params" value={loraConfig.trainableParams} />
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                <h2 className="text-sm font-semibold text-stone-300 mb-1">Training Configuration</h2>
                <p className="text-xs text-stone-500 mb-4">Seq2Seq training arguments</p>
                <ConfigRow label="Epochs" value={trainingConfig.epochs} />
                <ConfigRow label="Batch Size" value={trainingConfig.batchSize} />
                <ConfigRow label="Grad Accumulation" value={trainingConfig.gradAccum} />
                <ConfigRow label="Effective Batch" value={trainingConfig.effectiveBatch} />
                <ConfigRow label="Learning Rate" value={trainingConfig.lr} />
                <ConfigRow label="Warmup Steps" value={trainingConfig.warmup} />
                <ConfigRow label="Weight Decay" value={trainingConfig.weightDecay} />
                <ConfigRow label="Mixed Precision" value={trainingConfig.fp16 ? "fp16 ✓" : "No"} />
            </div>
        </div>
    );
}