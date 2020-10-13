import React from 'react';
import './App.css';
import Imput from './components/imput'

function App() {
  return (
      <div className='todo container'>
            <h1 className='head-todo display-3 text-center'>To-Do List!!</h1>
      <Imput/>
      </div>
  );
}

export default App;
