function PromptInput() {
  return (
    <div id="promptInput" className="mx-auto mt-3">
      <label>
        <b>Enter prompt</b>
        <br />
        <textarea
          id="promptInputTextarea"
          className="mx-auto"
          //   onChange={changeText}
        ></textarea>
      </label>
      <br />
      <div className="flex-box">
        <button
          id="promptInputSubmit"
          className="btn btn-primary"
          // onSubmit={submitText}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PromptInput;
