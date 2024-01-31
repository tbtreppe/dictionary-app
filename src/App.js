import dictionary from "./dictionary-main-image.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={dictionary}
            className="Main-img img-fluid"
            alt="dictionary"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          <small>Coded by Tracey Reis</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
