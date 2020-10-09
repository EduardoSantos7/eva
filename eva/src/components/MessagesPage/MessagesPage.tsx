import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
import SideChats from 'components/MessagesPage/SideChats/SideChats';
import  'components/MessagesPage/MessagesPage.css';
import ChatContainer from "components/MessagesPage/ChatContainer/ChatContainer";
import { useParams } from "react-router";
import { MessagesParams } from "interfaces/MessagesParams";
import { ChatOverview } from "interfaces/ChatOverview";
import { ChatsProvider, useChats } from "contexts/Chats";

let socket;

function MessagesPage() {
    const { chatId } = useParams<MessagesParams>();
    const ENDPOINT = 'ws://localhost:9000/';

    const { chats } = useChats();
    
    useEffect(() => {
        console.log(chats)
    }, )

    return (
        <div id="MessagesPage">
            <SideChats />
            <ChatContainer/>
        </div>
    )
}

export default () => (
      <ChatsProvider>
        <MessagesPage/>
      </ChatsProvider>
);
