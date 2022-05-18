const data = {
  prompt: "Write a poem about a dog wearing skis",
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
};

fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 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",
  },
  body: JSON.stringify(data),
})
  .then((data) => data.json())
  .then((data) => console.log(data.choices[0].text));
