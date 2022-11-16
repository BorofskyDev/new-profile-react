import { useState } from 'react'
import {
  BsFillHddStackFill,
  BsPersonCircle,
  BsLink,
  BsBriefcaseFill,
  BsEnvelope,
} from 'react-icons/bs'
import TabNavItem from './TabNavItem'
import TabContent from './TabContent'
import './Tabs.scss'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('stack')

  return (
    <nav className='Tabs'>
      <div className='sr-only'>Navigation</div>
      <ul className='Tabs__nav'>
        <TabNavItem
          className='Tabs__tab'
          title={<BsFillHddStackFill />}
          id='stack'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className='sr-only'>Stack</div>
        <TabNavItem
          className='Tabs__tab'
          title={<BsPersonCircle />}
          id='about'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className='sr-only'>about</div>
        <TabNavItem
          className='Tabs__tab'
          title={<BsLink />}
          id='links'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className='sr-only'>Social Media Links</div>
        <div className='sr-only'>Projects</div>
        <TabNavItem
          className='Tabs__tab'
          title={<BsBriefcaseFill />}
          id='projects'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className='sr-only'>Contact</div>
        <TabNavItem
          className='Tabs__tab'
          title={<BsEnvelope />}
          id='contact'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
    </nav>
  )
}
