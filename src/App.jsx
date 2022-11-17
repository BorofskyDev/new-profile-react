import './App.scss'
import About from './pages/About/About'
import Main from './pages/Main/Main'
import Stack from './pages/Stack/Stack'
import Link from './pages/Links/Link'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
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
            <Stack />
            <About />
            <Link />
            <Projects />
            <Contact />
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
