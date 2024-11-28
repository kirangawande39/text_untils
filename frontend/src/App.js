
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextUp from './components/TextUp';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2c3d55';
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>

          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={ <TextUp heading="Enter the text here" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
