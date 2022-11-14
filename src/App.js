import React from 'react';
import'./App.css';
import { Route, Routes,Link } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">
      <img src='https://teatimejournal.com/wp-content/uploads/2022/08/cropped-TeaTimeTransperentBg-300x120.png' alt='' width="250"></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li classNameName="nav-item">
          <Link to='/' className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link  to="/About"className="nav-link active">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact"className="nav-link active" >Get In Touch</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
  </Routes>
  </>
  )
}

export default App