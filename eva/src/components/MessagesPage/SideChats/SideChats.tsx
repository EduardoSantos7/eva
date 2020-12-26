import React from 'react'

import ChatsSearchBar from 'components/MessagesPage/ChatsSearchBar/ChatsSearchBar';
import SideBarHeader from "components/MessagesPage/SideBarHeader/SideBarHeader";
import ChatsList from "components/MessagesPage/ChatsList/ChatsList";
import { SideChatsProps } from "interfaces/SideChatsProps";
import "components/MessagesPage/SideChats/SideChats.css"
import { useWindowState } from "providers/WindowStateProvider";
import CreateIcon from '@material-ui/icons/Create';


export default function SideChats(props:SideChatsProps) {
    let searched_value = false;

    const {isSmallScreen} = useWindowState()
    
    return (
        <div className="sidebar">
            {
                !isSmallScreen && <SideBarHeader /> 
            }
            <div className="search__continaer">
                {
                    !isSmallScreen && <ChatsSearchBar />
                }
                {
                    isSmallScreen && <div className="search__continaer__icon"><CreateIcon/></div>
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
