import React from 'react'
import Home from './Home'
import Notifications from './Notifications'
import ProfileLink from './ProfileLink'
import CreatePost from './CreatePost'
import Search from './Search'
const SidebarItems = () => {
  return (
      <>
       <Home />
          <Notifications />
          <Search/>
          <CreatePost/>
          <ProfileLink/>
      </>
  )
}

export default SidebarItems