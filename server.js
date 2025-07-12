const express = require("express");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");

const app = express();
const openai = new OpenAI({ apiKey: "YOUR_OPENAI_API_KEY" }); // Replace this

app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.static(__dirname)); // Serve all files including phototomacro.html

app.post("/analyze-photo", async (req, res) => {
  const { imageBase64 } = req.body;

  try {
    const result = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "List all food items and estimate quantities. Reply as:\n{ \"items\": [ { \"name\": \"food\", \"quantity\": \"amount\" } ] }"
            },
            {
              type: "image_url",
              image_url: { url: `data:image/jpeg;base64,${imageBase64}` }
            }
          ]
        }
      ],
      max_tokens: 500,
    });

    const content = result.choices[0].message.content;

    try {
      res.json(JSON.parse(content));
    } catch (err) {
      res.json({ raw: content });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to analyze image." });
  }
});

app.listen(3000, () => console.log("✅ Server running: http://localhost:3000/phototomacro.html"));
