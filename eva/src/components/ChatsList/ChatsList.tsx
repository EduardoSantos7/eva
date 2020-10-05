import React from 'react'

import "components/ChatsList/ChatsList.css";
import ChatBox from "components/ChatBox/ChatBox";

export default function ChatsList() {
    return (
        <div className="chats__list">
            <ChatBox profile_image="" profile_name="" messages={[]} />
            <ChatBox profile_image="" profile_name="" messages={[]}/>
        </div>
    )
}
