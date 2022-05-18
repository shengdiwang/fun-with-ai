function Response(props) {
  return (
    <div className="response-div p-2">
      <table className="response-table">
        <tbody>
          <tr>
            <td className="response-table-first-col">
              <b>Prompt:</b>
            </td>
            <td>{props.input}</td>
          </tr>
          <tr>
            <td>
              <b>Response:</b>
            </td>
            <td>{props.response}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Response;
