require("dotenv").config();

async function getResponse(prompt, engine) {
  if (!prompt || typeof prompt !== "string") {
    throw TypeError("Requires non-empty strings.");
  } else if (
    !engine ||
    (engine !== "text-davinci-002" &&
      engine !== "text-curie-001" &&
      engine !== "text-babbage-001" &&
      engine !== "text-ada-001")
  ) {
    throw RangeError("Requires a valid engine type.");
  }

  const data = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const KEY = process.env.API_KEY;

  return fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY}`,
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => data.choices[0].text);
}

export { getResponse };
