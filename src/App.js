import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import NoteList from './components/NoteList/NoteList';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-content">
        <NoteList />
        <Form />
      </main>
    </div>
  );
}

export default App;
