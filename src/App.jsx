import "./index.css";
function App() {
  return (
    <main>
      <ol id="user-input">
        UserInput
        <li className="input-group">
          <span>
            <label>INITIAL INVESTMENT</label>
            <input type="text"></input>
          </span>
          <span>
            <label>INITIAL INVESTMENT</label>
            <input type="text"></input>
          </span>
        </li>
      </ol>
      <div className="center">Result</div>
    </main>
  );
}

export default App;
