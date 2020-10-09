import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
import SideChats from 'components/MessagesPage/SideChats/SideChats';
import  'components/MessagesPage/MessagesPage.css';
import ChatContainer from "components/MessagesPage/ChatContainer/ChatContainer";
import { useParams } from "react-router";
import { MessagesParams } from "interfaces/MessagesParams";
import { ChatOverview } from "interfaces/ChatOverview";

let socket;

export default function MessagesPage() {
    const { chatId } = useParams<MessagesParams>();
    const ENDPOINT = 'ws://localhost:9000/';

    const [_chats, setchats] = useState<[any]>()

    useEffect(() => {

        socket = io(ENDPOINT);

        socket.emit('chats', '1')
        
        socket.on('chats', (chats: [ChatOverview]) => {
            setchats(chats)
        })
    }, [ENDPOINT]);

    return (
        <div id="MessagesPage">
            <SideChats />
            <ChatContainer/>
        </div>
    )
}
