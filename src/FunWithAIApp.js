import { createRoot } from "react-dom/client";
import PromptInput from "./PromptInput";
import ResponseDisplay from "./ResponseDisplay";

const FunWithAIApp = () => {
  // function submitText(e) {
  //   e.preventDefault();

  //   inputText = document.getElementById("inputText").value;

  // }

  return (
    <div id="app" className="mx-auto">
      <h3>
        <b id="text-title">Fun with AI!</b>
      </h3>
      <PromptInput />
      <ResponseDisplay />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<FunWithAIApp />);
