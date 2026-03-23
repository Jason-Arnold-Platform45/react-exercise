import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Navbar } from './Components/navbar'
import { Login } from './Components/LoginForm'
import './App.css'

function Home() {
  return (
    <div className="body-content">
      <div className="left-content">
        <h2>Ag man, our cleaning products are lekker!</h2>
        <p>
          From the bustling streets of Jozi to the serene<br />
          beauty of the Cape, our monthly cleaning<br />
          packages bring a touch of sparkle to every<br />
          corner of Mzansi.
        </p>
        <NavLink to="/start_your_free_trial" end><button className='button'>Start your free trial</button></NavLink>
      </div>
      <div className="right-content">
        <img src="/image.png" alt="Cleaning product mascot" />
      </div>
    </div>
  )
}

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/label" element={<div>Label Page</div>} />
        <Route path="/label2" element={<div>Label 2 Page</div>} />
        <Route path="/signup" element={<div>Sign Up Page</div>} />
        <Route path='/start_your_free_trial' element={<div>Start your Free Trial</div>} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
