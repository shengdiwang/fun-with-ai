import { useState } from "react";
import { getResponse } from "./Utils";

function PromptInput(props) {
  const [prompt, setPrompt] = useState("");
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

    const response = await getResponse(prompt);
    const list = props.responsePairList;
    list.push([prompt, response]);
    props.responsePairList = props.setResponsePairList([...list]);

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
