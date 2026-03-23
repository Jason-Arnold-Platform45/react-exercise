import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/navbar'
import './App.css'

function Home() {
  return (
    <div className="body-content">
      <div className="left-content">
        <h2>Ag man, our cleaning product are lekker!</h2>
        <p>From the bustling streets of Jozi to the serene beauty of the Cape, our monthly cleaning packages bring a touch of sparkle to every corner of Mzansi.</p>
        <button>Start your free trial</button>
      </div>
      <div className="right-content">
        <img src="/image.png" alt="Cleaning product mascot" />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<div>Label Page</div>} />
        <Route path="/label2" element={<div>Label 2 Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Sign Up Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
