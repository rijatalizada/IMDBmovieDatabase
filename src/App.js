import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Movies from './Pages/Movies';
import Movie from './Pages/Movie'
import ContactPage from './Pages/ContactPage';
import Messages from './Pages/Messages'

function App() {
  return (
    <div className="App w-full h-full">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/messages' element={<Messages/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;