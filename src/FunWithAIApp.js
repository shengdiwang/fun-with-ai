import { useState } from "react";
import { createRoot } from "react-dom/client";
import PromptInput from "./PromptInput";
import ResponseDisplay from "./ResponseDisplay";

const FunWithAIApp = () => {
  const [responseList, setResponseList] = useState([]);

  return (
    <div id="app" className="mx-auto mt-3">
      <h3>
        <b id="text-title">Fun with AI!</b>
      </h3>
      <PromptInput
        responseList={responseList}
        setResponseList={setResponseList}
      />
      <ResponseDisplay responseList={responseList} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<FunWithAIApp />);
