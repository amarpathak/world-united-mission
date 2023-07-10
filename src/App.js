import "./App.css";
import logo from "./logo.jpeg";

function App() {
  const btns = ["Events", "Documents", "Photos", "Audio", "Video"];

  return (
    <div class="container">
      <div class="content">
        <img src={logo} className="logo" alt="logo" />
        <span className="gradient-text">WORLD UNITED MISSION</span>
        <div class='btns'>
          {btns.map((btn) => (
            <button>{btn}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
