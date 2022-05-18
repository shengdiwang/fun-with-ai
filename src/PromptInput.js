import { useState } from "react";
import { getResponse } from "./Utils";
import EngineDropDown from "./EngineDropDown";

function PromptInput(props) {
  const [prompt, setPrompt] = useState(
    "Give a short instruction and let your AI run with it (try removing this first line and submit)\nWrite a tagline for an ice cream shop."
  );
  const [engine, setEngine] = useState("text-curie-001");
  const [alertStatus, setAlertStatus] = useState(false);

  function handleChange(e) {
    setPrompt(e.target.value);
    setAlertStatus(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!prompt) {
      setAlertStatus(true);
      document.getElementById("promptInputTextarea").focus();
      return;
    }

    const response = await getResponse(prompt, engine);
    const list = props.responseList;
    list.push([prompt, engine, response]);
    props.responseList = props.setResponseList([...list]);

    setPrompt("");
    return;
  }

  return (
    <div id="promptInput" className="mx-auto mt-3">
      <form onSubmit={handleSubmit}>
        <label>
          <b>Enter prompt</b>
          <br />
          <textarea
            id="promptInputTextarea"
            className="mx-auto"
            value={prompt}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <EngineDropDown engine={engine} setEngine={setEngine} />
        <br />
        <div className="flex-box">
          {alertStatus ? (
            <div className="error-msg">
              Requires non-empty input to submit&nbsp;
            </div>
          ) : null}
          <input
            id="promptInputSubmit"
            className="btn btn-primary"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default PromptInput;
