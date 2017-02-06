import React from 'react'
import './App.css'
import NavBar from './Navbar'

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

export default App;
