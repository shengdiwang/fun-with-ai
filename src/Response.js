function Response(props) {
  return (
    <table className="response-block">
      <tbody>
        <tr>
          <td>Prompt:</td>
          <td>{props.input}</td>
        </tr>
        <tr>
          <td>Response:</td>
          <td>{props.response}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Response;
