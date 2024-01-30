import dictionary from "./dictionary-main-image.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionary} className="Main-img img-fluid" alt="dictionary" />
      </header>
    </div>
  );
}

export default App;
