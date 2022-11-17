import { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
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
        <Link to='/'>
          <TabNavItem
            title={<BsFillHddStackFill />}
            id='stack'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <div className='sr-only'>Stack</div>
          </TabNavItem>
        </Link>

        <Link className='Tabs__link' to='/about'>
          <TabNavItem
            title={<BsPersonCircle />}
            id='about'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <div className='sr-only'>about</div>
          </TabNavItem>
        </Link>

        <Link className='Tabs__link' to='/link'>
          <TabNavItem
            title={<BsLink />}
            id='links'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <div className='sr-only'>Social Media Links</div>
          </TabNavItem>
        </Link>

        <Link className='Tabs__link' to='/projects'>
          <TabNavItem
            title={<BsBriefcaseFill />}
            id='projects'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <div className='sr-only'>Projects</div>
          </TabNavItem>
        </Link>

        <Link className='Tabs__link' to='/contact'>
          <TabNavItem
            title={<BsEnvelope />}
            id='contact'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <div className='sr-only'>Contact</div>
          </TabNavItem>
        </Link>
      </ul>
    </nav>
  )
}
