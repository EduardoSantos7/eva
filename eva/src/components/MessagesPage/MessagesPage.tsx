import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";

import io from "socket.io-client";

import SideChats from 'components/MessagesPage/SideChats/SideChats';
import ChatContainer from "components/MessagesPage/ChatContainer/ChatContainer";
import { MessagesParams } from "interfaces/MessagesParams";
import  'components/MessagesPage/MessagesPage.css';
import { ChatOverview, defaultChatOverview } from "interfaces/ChatOverview";

let socket;

export default function MessagesPage() {
    const ENDPOINT = 'ws://localhost:9000/';

    const [chats, setchats] = useState<any[]>()
    const [currentChat, setCurrentChat] = useState<ChatOverview>(defaultChatOverview)
    const { chatId } = useParams<MessagesParams>();

    const updateCurrentChat = async() => {
        console.log("entrreeeeeee", chatId)
        if (chats) {
            let chat: ChatOverview = chats.filter((elem: ChatOverview) => elem.id === chatId)[0]
            setCurrentChat(chat)
        }
    }

    useEffect(() => {
        updateCurrentChat()
    }, [chats])

    useEffect(() => {

        socket = io(ENDPOINT);

        socket.emit('chats', '1')
        
        socket.on('chats', (chats_list: string) => {
            console.log(JSON.parse(chats_list));
            let chats_parsed = JSON.parse(chats_list);
            setchats(chats_parsed);
            updateCurrentChat()
            console.log(chats_parsed);
        });

    }, [ENDPOINT]);


    // If the chat change then ask for the info of tthe new chat
    useEffect(() => {
        console.log(chatId)
        updateCurrentChat()
    }, [chatId])

    return (
        <div id="MessagesPage">
            <SideChats chats={ chats }/>
            <ChatContainer { ...currentChat }/>
        </div>
    )
}
