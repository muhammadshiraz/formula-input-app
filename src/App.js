import React from 'react';
import './App.css';
import TagEditor from './components/TagEditor';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
        <header>
          <div className="header">
            <a href="/">
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </div>
        </header>        
        <TagEditor />
      </div>
  );
}

export default App;
