import React, { useEffect } from 'react'
import ChatHeader from "components/MessagesPage/ChatHeader/ChatHeader";
import ChatFooter from "components/MessagesPage/ChatFooter/ChatFooter";

import "components/MessagesPage/ChatContainer/ChatContainer.css"
import { useParams } from "react-router";
import { MessagesParams } from "interfaces/MessagesParams";
import { ChatOverview } from "interfaces/ChatOverview";

export default function ChatContainer(props: ChatOverview) {
    const { chatId } = useParams<MessagesParams>();

    // If the chat change then ask for the info of tthe new chat
    useEffect(() => {
        console.log(chatId)
    }, [chatId])

    return (
        <div className="chat__container">
            <ChatHeader { ...props }/>
            <ChatFooter receptorID={props.id}/>
        </div>
    )
}
