import React from 'react'

import SettingsIcon from '@material-ui/icons/Settings';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CreateIcon from '@material-ui/icons/Create';

export default function SideBarHeader() {
    return (
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
    )
}
