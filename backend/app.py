
import os
import logging
from flask import Flask, request, jsonify, render_template_string
from flask_cors import CORS
from transformers import MBart50TokenizerFast, MBartForConditionalGeneration
from peft import PeftModel
import torch

logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)


MODEL_BASE_NAME = "facebook/mbart-large-50-many-to-many-mmt"
PEFT_PATH = "./model/peft_lora"      
TOKENIZER_PATH = "./model/tokenizer" 


device = "cuda" if torch.cuda.is_available() else "cpu"
log.info("Using device: %s", device)


log.info("Loading tokenizer from %s", TOKENIZER_PATH)
tokenizer = MBart50TokenizerFast.from_pretrained(TOKENIZER_PATH)
tokenizer.src_lang = "si_LK"
tokenizer.tgt_lang = "en_XX"


log.info("Loading base model (this can take a while)...")
if device == "cpu":

    base_model = MBartForConditionalGeneration.from_pretrained(MODEL_BASE_NAME, device_map=None)
else:
    base_model = MBartForConditionalGeneration.from_pretrained(MODEL_BASE_NAME, device_map="auto")

log.info("Attaching LoRA weights from %s", PEFT_PATH)
model = PeftModel.from_pretrained(base_model, PEFT_PATH, device_map="auto" if device == "cuda" else None)
model.to(device)
model.eval()

log.info("Model loaded. Parameters: device=%s", next(model.parameters()).device)

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def index():
    html = """
    <h2>Sinhala→English Translator API</h2>
    <p>POST JSON to <code>/translate</code> with <code>{"text":"කසළ රෝගය"}</code></p>
    <p>Health check: <a href="/health">/health</a></p>
    """
    return render_template_string(html)

@app.route("/health", methods=["GET"])
def health():
    return jsonify(status="ok", device=str(device))

@app.route("/translate", methods=["POST"])
def translate():
    try:
        data = request.get_json(force=True)
    except Exception as e:
        return jsonify({"error": "Invalid JSON", "details": str(e)}), 400

    if not data or "text" not in data:
        return jsonify({"error": "send JSON with `text` field"}), 400

    src_text = data["text"]
    if not isinstance(src_text, str) or not src_text.strip():
        return jsonify({"error": "`text` must be a non-empty string"}), 400


    inputs = tokenizer(src_text, return_tensors="pt", truncation=True, padding=True, max_length=128)
    inputs = {k: v.to(device) for k, v in inputs.items()}

    forced_bos = tokenizer.lang_code_to_id.get("en_XX", None)
    gen_kwargs = {
        "max_length": 96,
        "num_beams": 1,
        "early_stopping": True,
    }
    if forced_bos is not None:
        gen_kwargs["forced_bos_token_id"] = forced_bos

    with torch.no_grad():
        generated = model.generate(**inputs, **gen_kwargs)

    pred = tokenizer.batch_decode(generated, skip_special_tokens=True)[0]
    return jsonify({"input": src_text, "translation": pred})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
