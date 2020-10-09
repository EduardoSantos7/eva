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

    const [chats, setchats] = useState<any[]>()

    useEffect(() => {

        socket = io(ENDPOINT);

        socket.emit('chats', '1')
        
        socket.on('chats', (chats_list: string) => {
            console.log(JSON.parse(chats_list))
            let chats_parsed = JSON.parse(chats_list)
            setchats(chats_parsed)
            console.log(chats_parsed)
        })
    }, [ENDPOINT]);

    return (
        <div id="MessagesPage">
        <SideChats chats={ chats }/>
            <ChatContainer/>
        </div>
    )
}
