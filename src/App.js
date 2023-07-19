import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 1500);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark Mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  }
  return (< >
    <BrowserRouter>
      <Navbar title="My-App" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
      <Alert alert={alert} />
      <div className="continer my-3">
        <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="My-App - Word Counter, Character Counter, Remove extra spaces " mode={mode} />} />
          <Route exact path="/about" element={<About  mode={mode} />} />
          <Route exact path="/contact" element={<Contact mode={mode}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;