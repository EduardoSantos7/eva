import React from 'react'
import SideChats from 'components/MessagesPage/SideChats/SideChats';
import  'components/MessagesPage/MessagesPage.css';

export default function MessagesPage() {
    return (
        <div id="MessagesPage">
            {/* SideChats */}
            <SideChats />
            {/* ChatContainer */}
            <div id="chat-container">

            </div>
        </div>
    )
}
