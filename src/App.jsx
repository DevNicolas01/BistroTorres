import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Reservations from './pages/Reservations'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-creme">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/sobre"    element={<About />} />
          <Route path="/reservas" element={<Reservations />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
