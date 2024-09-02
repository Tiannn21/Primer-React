import { useState } from 'react';
import './App.css';
import Sismo from './components/Sismo.jsx';

function App() {

  return (
    <>
      <h1>Sismos App</h1>
      <div className="card">
        <Sismo/>
      </div>
    </>
  )
}

export default App
