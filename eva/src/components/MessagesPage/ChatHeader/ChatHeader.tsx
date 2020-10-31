import React from 'react'

import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import InfoIcon from '@material-ui/icons/Info';

import "components/MessagesPage/ChatHeader/ChatHeader.css"
import { ChatOverview } from "interfaces/ChatOverview";

export default function ChatHeader({ profile_image, profile_name, status }: ChatOverview) {

    return (
        <div className="chat__header">
            <div className="chat__header__right">
                <div className="chat__header__right__picture">
                    {profile_image && <img className="chat__header__right__picture__img" src = {profile_image} alt=""/>}
                </div>
                <div className="chat__header__main__info">
                    <div className="chat__header__profile__name">
                        { profile_name }
                    </div>
                    <div className="chat__header__last__message__info">
                        <div className="chat__header__last__message">
                            {status}
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat__header__left">
                <div className="chat__header__left__icons">
                    <CallIcon />
                    <VideocamIcon />
                    <InfoIcon />
                </div>
            </div>
        </div>
    )
}
