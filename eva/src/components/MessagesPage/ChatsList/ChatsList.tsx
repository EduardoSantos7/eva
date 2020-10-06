import React from 'react'

import "components/MessagesPage/ChatsList/ChatsList.css";
import ChatBox from "components/MessagesPage/ChatBox/ChatBox";

export default function ChatsList() {
    return (
        <div className="chats__list">
            <ChatBox profile_image="" profile_name="" messages={[]} />
            <ChatBox profile_image="" profile_name="" messages={[]}/>
        </div>
    )
}
