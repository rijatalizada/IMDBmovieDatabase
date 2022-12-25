import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Movies from './Pages/Movies';

function App() {
  return (
    <div className="App w-full h-full">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;