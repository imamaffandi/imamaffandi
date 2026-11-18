import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, About, Terms } from './pages'
import { Nav } from './components'
import { SmoothScroll } from './components/SmoothScroll'

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SmoothScroll>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
