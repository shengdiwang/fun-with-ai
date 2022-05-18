import Response from "./Response";

function ResponseDisplay(props) {
  const data = props.responseList.reverse();
  // Using indexes as keys since order of responses is newest to oldest.
  const responses = data.map((d, index) => (
    <Response key={index} input={d[0]} engine={d[1]} response={d[2]} />
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
