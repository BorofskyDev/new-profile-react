

export default function TabNavItem({ id, title, activeTab, setActiveTab }) {
  
    function handleClick(){
        setActiveTab(id)
    }
  
    return (
    <li
        onClick={handleClick}
        className={activeTab === id ? 'Tabs__tab active' : 'Tabs__tab'}
    >
        {title}
    </li>
  )
}
