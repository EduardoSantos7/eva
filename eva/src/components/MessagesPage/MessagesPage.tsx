import React from 'react'
import SideChats from 'components/MessagesPage/SideChats/SideChats';
import  'components/MessagesPage/MessagesPage.css';
import ChatContainer from "components/MessagesPage/ChatContainer/ChatContainer";
import { useParams } from "react-router";
import { MessagesParams } from "interfaces/MessagesParams";

export default function MessagesPage() {
    const { chatId } = useParams<MessagesParams>();

    return (
        <div id="MessagesPage">
            <SideChats />
            <ChatContainer/>
        </div>
    )
}
