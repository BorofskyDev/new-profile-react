import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.scss'
import About from './pages/About/About'
import Main from './pages/Main/Main'
import Stack from './pages/Stack/Stack'
import Link from './pages/Links/Link'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Earth from './pages/Earth/Earth'

function App() {
  return (
    <div className='canvas-container'>
      <div className='Card'>
        <div className='Card__container'>
          <div className='Card__header'>
            <Main />
          </div>
          <div className='Card__main'>
            <Routes>
              <Route path='/' element={<Stack />} />
              <Route path='/about' element={<About />} />
              <Route path='/link' element={<Link />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
