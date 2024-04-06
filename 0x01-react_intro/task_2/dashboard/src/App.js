import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  const handleLabelClick = (event) => {
    const inputId = event.target.htmlFor;
    if (inputId) {
      const inputElement = document.getElementById(inputId);
      if (inputElement) {
        inputElement.focus();
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/holberton_logo.jpg" className="App-logo" alt="logo" />
        <h1 className="App-title">School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="input-group">
          <label htmlFor="email" onClick={handleLabelClick}>Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password" onClick={handleLabelClick}>Password:</label>
          <input type="password" id="password" />
        </div>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>&copy; {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
