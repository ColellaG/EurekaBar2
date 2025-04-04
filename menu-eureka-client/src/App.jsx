import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import Menu from './pages/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
