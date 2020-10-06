import React from 'react'
import SideChats from 'components/MessagesPage/SideChats/SideChats';
import  'components/MessagesPage/MessagesPage.css';
import ChatContainer from "components/MessagesPage/ChatContainer/ChatContainer";

export default function MessagesPage() {
    return (
        <div id="MessagesPage">
            <SideChats />
            <ChatContainer/>
        </div>
    )
}
