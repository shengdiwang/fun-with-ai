async function getResponse(prompt, engine) {
  if (!prompt || typeof prompt !== "string") {
    throw TypeError("Requires non-empty strings.");
  }

  const data = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  // TODO: Replace with environment variable after deployment.
  const SECRETE_KEY = "";

  return fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SECRETE_KEY}`,
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => data.choices[0].text);
}

export { getResponse };
