import React from 'react'

import SettingsIcon from '@material-ui/icons/Settings';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CreateIcon from '@material-ui/icons/Create';

import "components/MessagesPage/SideChats/SideChats.css"
import { Grid} from '@material-ui/core';
import ChatsSearchBar from 'components/MessagesPage/ChatsSearchBar/ChatsSearchBar';


export default function SideChats() {

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Grid container direction="row" justify="space-between" alignItems="center">

                    <Grid item xs={5}>
                        <h1 className="sidebar__header__title">
                            Chats
                        </h1>
                    </Grid>

                    <Grid item xs={7}>
                        <div className="sidebar__header__icons__container">
                            <SettingsIcon className="sidebar__header__icon"/>
                            <VideoCallIcon className="sidebar__header__icon"/>
                            <CreateIcon className="sidebar__header__icon"/>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="search__continaer">
                <ChatsSearchBar />
            </div>
            <div id="chats-container">
                chats...
            </div>
        </div>
    )
}
