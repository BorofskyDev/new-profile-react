import { FaGithub, FaLinkedinIn, FaTwitter, FaCodepen } from 'react-icons/fa'
import './Link.scss'

export default function Link() {
  return (
    <>
      <div className='Link'>
        <h3 className='Link__title'>Links</h3>
        <div className='Link__container'>
          <a
            href='#'
            style={{ '--clr': '#7313FF' }}
            className='Link__links'
            id='github'
          >
            {/* <span className='sr-only'>Github</span> */}
            <FaGithub /> <span className='Link__links--name'>GitHub</span>
          </a>
          <a
            href='#'
            style={{ '--clr': '#00A4FF' }}
            className='Link__links'
            id='linkedin'
          >
            {/* <span className='sr-only'>LinkedIn</span> */}
            <FaLinkedinIn /> <span className='Link__links--name'>LinkedIn</span>
          </a>
          <a
            href='#'
            style={{ '--clr': '#00B8FF' }}
            className='Link__links'
            id='twitter'
          >
            {/* <span className='sr-only'>Twitter</span> */}
            <FaTwitter /> <span className='Link__links--name'>Twitter</span>
          </a>
          <a
            href='#'
            style={{ '--clr': '#F7F7F7' }}
            className='Link__links'
            id='codepen'
          >
            {/* <span className='sr-only'>CodePen</span> */}
            <FaCodepen /> <span className='Link__links--name'>Codepen</span>
          </a>
        </div>
      </div>
    </>
  )
}
