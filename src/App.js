import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Courses' element={<Courses/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App