import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Game from './components/Game';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            
              <Route path="/" element={<LandingPage />} />
              <Route path="/game" element={<Game/>}/>
              

          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
