import { createRoot } from "react-dom/client";
import Response from "./Response";

const App = () => {
  return (
    <div id="main" className="mx-auto">
      <div id="input" className="mt-5">
        <h3>Fun with AI!</h3>
        <label htmlFor="inputText">Enter prompt</label>
        <br />
        <textarea
          id="inputText"
          name="fileName"
          type="text"
          rows="10"
          cols="50"
        ></textarea>
        <br />
        <button id="submitText" className="btn btn-primary">
          Submit
        </button>
      </div>
      <div id="responses" className="mt-5">
        <h4>Responses</h4>
        <Response input="12345" response="54321" />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
