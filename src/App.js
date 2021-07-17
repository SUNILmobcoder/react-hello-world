import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>I am react app Live over github</h1>
    <h3>Happy Hacking</h3>
    <h1>Steps</h1>
    <p>npm i gh-pages --save-dev</p>
    <h6>add in package.json</h6>
    <p>"homepage" : "http://username.github.io/repo-name"</p>
    <h6>add in scripts</h6>
    <p> 
      "start": "react-scripts start",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
      </p>
      <h5>npm run deploy</h5>
    </>
  );
}

export default App;
