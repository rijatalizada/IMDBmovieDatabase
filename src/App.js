import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Movies from './Pages/Movies';
import Movie from './Pages/Movie'
import ContactPage from './Pages/ContactPage';
import Messages from './Pages/Messages'
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App w-full h-full">
      <Router basename='/IMDBmovieDatabase'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;