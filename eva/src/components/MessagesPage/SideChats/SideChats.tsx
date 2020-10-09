import React from 'react'

import SettingsIcon from '@material-ui/icons/Settings';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CreateIcon from '@material-ui/icons/Create';

import "components/MessagesPage/SideChats/SideChats.css"
import ChatsSearchBar from 'components/MessagesPage/ChatsSearchBar/ChatsSearchBar';
import ChatsList from "components/MessagesPage/ChatsList/ChatsList";
import { SideChatsProps } from "interfaces/SideChatsProps";


export default function SideChats(props:SideChatsProps) {
    let searched_value = false;
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1 className="sidebar__header__title">
                    Chats
                </h1>
                <div className="sidebar__header__icons__container">
                    <SettingsIcon className="sidebar__header__icon"/>
                    <VideoCallIcon className="sidebar__header__icon"/>
                    <CreateIcon className="sidebar__header__icon"/>
                </div>
            </div>
            <div className="search__continaer">
                <ChatsSearchBar />
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
