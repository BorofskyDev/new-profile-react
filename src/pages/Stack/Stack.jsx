import { useState } from 'react'
import { GiGalaxy } from 'react-icons/gi'
import { FaCss3, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiThreedotjs } from 'react-icons/si'
import './Stack.scss'

export default function Stack() {
  const [toggleStack, setToggleStack] = useState(false)

  function handleToggle() {
    setToggleStack(!toggleStack)
  }

  return (
    <ul className='Stack'>
      {/* <h3 className='Stack__title'>My Stack</h3>
      <p className='Stack__description'>
        Frontend focused, these are my primary languages/technologies, but not
        the only ones I work in. Feel free to reach out to find out more.{' '}
      </p> */}
      <div className='Stack__toggle active' onClick={handleToggle}>
        <GiGalaxy className='Stack__plus' />
        <div className='sr-only'>Menu</div>
      </div>
      <li style={{ '--i': 0, '--clr': '#5ED3F3' }}>
        <a href='#'>
          <FaReact />
          <div className='sr-only'>React</div>
        </a>
      </li>
      <li style={{ '--i': 1, '--clr': '#DD4B25' }}>
        <a href='#'>
          <FaHtml5 />
          <div className='sr-only'>HTML5</div>
        </a>
      </li>
      <li style={{ '--i': 2, '--clr': '#2862E9' }}>
        <a href='#'>
          <FaCss3 />
          <div className='sr-only'>CSS3</div>
        </a>
      </li>
      <li style={{ '--i': 3, '--clr': '#F7D800' }}>
        <a href='#'>
          <FaJs />
          <div className='sr-only'>JavaScript</div>
        </a>
      </li>
      <li style={{ '--i': 4, '--clr': '#C55B8F' }}>
        <a href='#'>
          <FaSass />
          <div className='sr-only'>SASS</div>
        </a>
      </li>
      <li style={{ '--i': 5, '--clr': '#A12CD3' }}>
        <a href='#'>
          <SiThreedotjs />
          <div className='sr-only'>ThreeJS</div>
        </a>
      </li>
      <li style={{ '--i': 6, '--clr': '#EFE7FE' }}>
        <a href='#'>
          <SiNextdotjs />
          <div className='sr-only'>NextJS</div>
        </a>
      </li>
      <li style={{ '--i': 7, '--clr': '#36B7F0' }}>
        <a href='#'>
          <SiTailwindcss />
          <div className='sr-only'>Tailwind</div>
        </a>
      </li>
    </ul>
  )
}
