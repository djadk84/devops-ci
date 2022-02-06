import IPv4Addr from "./IPv4Addr";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Number one CIDR Calculator in the universe</div>
      </header>
      <IPv4Addr />
      <footer>
        <hr />
        If you enjoy this pretty tool, you will enjoy reading my blog:{" "}
        <a href="https://rderik.com/feed.xml">rderik.com</a>
      </footer>
    </div>
  );
}

export default App;
