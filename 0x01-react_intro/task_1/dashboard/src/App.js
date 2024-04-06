import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/holberton_logo.jpg" className="App-logo" alt="logo" />
        <h1 className="App-title">School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>&copy; {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
