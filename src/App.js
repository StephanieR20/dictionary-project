import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="App-header"> Dictionary</h1>
      <main>
        <Dictionary/>
      </main>
      <footer>
         This project was coded by Stephanie Rubio
          and is <a
            href="https://github.com/StephanieR20/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >open-sourced on GitHub
          </a> and <a
            href="https://silly-gates-e1c57f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >hosted on Netlify </a>
      </footer>
    </div>
    </div>
  );
}

export default App;
