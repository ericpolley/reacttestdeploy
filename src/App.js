import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>src/App.js</code> is changed! <br /> I can now Deploy and  update REACT with GIT.
        </p>
        <a
          className="App-link"
          href="https://ericpolley.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ericpolley.com <br />
          I'm like a fuckin' genius and shit dawg <br /> This is my fourth update to this site!
        </a>
      </header>
    </div>
  );
}

export default App;
