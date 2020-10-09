import React from 'react'

import "components/MessagesPage/ChatsList/ChatsList.css";
import ChatBox from "components/MessagesPage/ChatBox/ChatBox";
import { SideChatsProps } from "interfaces/SideChatsProps";

export default function ChatsList(props: SideChatsProps) {
    console.log(props);
    
    return (
        <div className= "chats__list" >
        {
            props.chats?.map((chat: any) => (
                <ChatBox {...chat}/>
            ))
        }
        </div>
    )
}
