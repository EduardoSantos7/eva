import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";

import SideChats from 'components/MessagesPage/SideChats/SideChats';
import ChatContainer from "components/MessagesPage/ChatContainer/ChatContainer";
import { MessagesParams } from "interfaces/MessagesParams";
import  'components/MessagesPage/MessagesPage.css';
import { ChatOverview, defaultChatOverview } from "interfaces/ChatOverview";
import ChatService from "services/chat/chat";


export default function MessagesPage() {
    const ENDPOINT = 'ws://localhost:9000/';

    const [chats, setChats] = useState<any>()
    const [currentChat, setCurrentChat] = useState<ChatOverview>(defaultChatOverview)
    const { chatId } = useParams<MessagesParams>();
    const chat = new ChatService(chatId);

    
    useEffect(() => {
        const getChats = async () => {
            const chats_parsed = await chat.getChats()
            console.log(chats_parsed)
            setChats(chats_parsed);
        }
        getChats();
        
        
    }, [ENDPOINT]);
    
    useEffect(() => {
        const updateCurrentChat = async() => {
            if (chats) {
                let chat: ChatOverview = chats.filter((elem: ChatOverview) => elem.id === chatId)[0]
                setCurrentChat(chat)
            }
        }
        updateCurrentChat()

        
    }, [chatId, chats]);

    return (
        <div id="MessagesPage">
            <SideChats chats={ chats }/>
            <ChatContainer { ...currentChat }/>
        </div>
    )
}
