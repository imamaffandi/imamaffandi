import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, About, ProjectDetail, Contact, Terms } from './pages'
import { Nav } from './components'

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:path" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
