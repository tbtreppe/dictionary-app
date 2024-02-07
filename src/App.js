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
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="app-footer">
          <small>
            This project was coded by Tracey Reis and is open sourced on
            <a href="https://github.com/tbtreppe/dictionary-app"> GitHub</a> and
            hosted on
            <a href="https://adorable-selkie-1c71c3.netlify.app"> Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
