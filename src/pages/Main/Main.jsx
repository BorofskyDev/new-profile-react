import Tabs from '../../components/Tabs/Tabs'
import './Main.scss'
import Me from '../../../public/images/me1.jpg'

export default function Main() {
  return (
    <header className='Main'>
      <h2 className='Main__title'>Joel Borofsky</h2>
      <img
        src={Me}
        alt='Joel Borofsky with a white cap on staring at the camera'
        className='Main__img'
      />
      <h3 className="Main__subtitle">Frontend Developer</h3>
      <p className="Main__tagline">A world of creative development</p>
      <Tabs />
    </header>
  )
}
