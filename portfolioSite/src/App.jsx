import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            
              <Route path="/" element={<LandingPage />} />

          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
