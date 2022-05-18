import Response from "./Response";

function ResponseDisplay() {
  const data = [["12345", "54321"]];
  // Using indexes as keys since order of responses is newest to oldest.
  const responses = data.map((d, index) => (
    <Response key={index} input={d[0]} response={d[1]} />
  ));
  return (
    <div id="responses" className="mx-auto mt-3">
      <h4>
        <b>Responses</b>
      </h4>
      {responses}
    </div>
  );
}

export default ResponseDisplay;
