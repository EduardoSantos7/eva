import React, { useEffect, useState } from 'react'

import ChatsSearchBar from 'components/MessagesPage/ChatsSearchBar/ChatsSearchBar';
import SideBarHeader from "components/MessagesPage/SideBarHeader/SideBarHeader";
import ChatsList from "components/MessagesPage/ChatsList/ChatsList";
import { SideChatsProps } from "interfaces/SideChatsProps";
import "components/MessagesPage/SideChats/SideChats.css"


export default function SideChats(props:SideChatsProps) {
    let searched_value = false;

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const isSmallScreenAuxiliar = window.innerWidth < 650;
            if (isSmallScreenAuxiliar !== isSmallScreen) setIsSmallScreen(isSmallScreenAuxiliar);
            console.log(window.innerWidth,  isSmallScreen);
            
        }, false);
        
    }, [isSmallScreen]);

    return (
        <div className="sidebar">
            {
                !isSmallScreen && <SideBarHeader /> 
            }
            <div className="search__continaer">
                {
                    !isSmallScreen && <ChatsSearchBar />
                }
            </div>
            <div className="search__results">
                {
                    !searched_value  && ( 
                        <div id="chats__list">
                            <ChatsList chats={ props.chats }/>
                        </div>)
                }
                {
                    searched_value && <h3>Loading</h3>
                }

            </div>
        </div>
    )
}
