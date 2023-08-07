// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'
import { useStateValue } from './StateProvider';

const Sidebar =({ messages }) => {
    const [{ user },dispatch] = useStateValue()
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src="https://unsplash.com/photos/rdHrrFA1KKg.jpg"/>
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'></div>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined />
                    <input placeholder='search or start a new chat' type='text' />
                </div>
            <div className='sidebar_chats'>
                <SidebarChat messages={messages}/>
            </div>
        </div>
    )
}
export default Sidebar