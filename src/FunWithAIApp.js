import { useState } from "react";
import { createRoot } from "react-dom/client";
import PromptInput from "./PromptInput";
import ResponseDisplay from "./ResponseDisplay";

const FunWithAIApp = () => {
  const [responsePairList, setResponsePairList] = useState([]);

  return (
    <div id="app" className="mx-auto">
      <h3>
        <b id="text-title">Fun with AI!</b>
      </h3>
      <PromptInput
        responsePairList={responsePairList}
        setResponsePairList={setResponsePairList}
      />
      <ResponseDisplay responsePairList={responsePairList} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<FunWithAIApp />);
