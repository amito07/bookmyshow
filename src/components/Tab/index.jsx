import React from 'react'

const Tab = ({tab_name, tab_tag, setActiveTab}) => {
  return (
    <button
    className="inline-block p-4 border-b-2 rounded-t-lg text-gray-500 hover:text-violet-700 hover:border-violet-700 dark:hover:text-violet-700 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110"
    id="profile-tab"
    data-tabs-target="#profile"
    type="button"
    role="tab"
    aria-controls={tab_tag}
    aria-selected="false"
    onClick={() => setActiveTab(tab_tag)}
  >
    {tab_name}
  </button>
  )
}

export default Tab