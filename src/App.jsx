import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, About, Contact } from './pages'
import { Nav } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App