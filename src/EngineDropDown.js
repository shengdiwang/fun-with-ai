function EngineDropDown(props) {
  function handleChange(e) {
    props.setEngine(e.target.value);
  }

  return (
    <label>
      Choose an OpenAI engine (or use the default!)&nbsp;
      <select value={props.engine} onChange={handleChange}>
        <option value="text-davinci-002">Davinci</option>
        <option value="text-curie-001">Curie</option>
        <option value="text-babbage-001">Babbge</option>
        <option value="text-ada-001">Ada</option>
      </select>
    </label>
  );
}

export default EngineDropDown;
