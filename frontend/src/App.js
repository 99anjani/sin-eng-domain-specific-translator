import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box
} from "@mui/material";

function App() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setTranslatedText("");

    try {
      const response = await fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText })
      });

      const data = await response.json();
      setTranslatedText(data.translation || "No translation returned.");
    } catch (error) {
      setTranslatedText("Error connecting to API.");
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sinhala → English Translator
      </Typography>

      <TextField
        label="Enter Sinhala text"
        multiline
        rows={4}
        fullWidth
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Box textAlign="center">
        <Button
          variant="contained"
          onClick={handleTranslate}
          disabled={loading}
          sx={{ mb: 3 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Translate"}
        </Button>
      </Box>

      {translatedText && (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Translated Text
            </Typography>
            <Typography variant="body1">{translatedText}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default App;
