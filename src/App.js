import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NotesContainer from './components/NotesContainer/NotesContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <NotesContainer />
    </div>
  );
}

export default App;

