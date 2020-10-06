import React from 'react'

import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import InfoIcon from '@material-ui/icons/Info';

import "components/MessagesPage/ChatHeader/ChatHeader.css"

export default function ChatHeader() {
    return (
        <div className="chat__header">
            <div className="chat__header__right">
                <div className="chat__header__right__picture">
                    <img className="chat__header__right__picture__img" src="https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/120801781_10218339207017802_7936581300890444311_o.jpg?_nc_cat=105&_nc_sid=84a396&_nc_eui2=AeH9V4kGYLuU4F-xIeaJcMoxEEW2NfE_-zkQRbY18T_7OYcsyEUd06B5JepUQGjt55I&_nc_ohc=Zso_hCbj9NMAX_Hk9dy&_nc_oc=AQlAK6sUN_rJxWXRylRh9910UsNQ6n4pI2lCbcu2t7UrPheLNJEgiaXekX5ehrkMFADRG8GRuye_z1dGi6Zjf5Xf&_nc_ht=scontent.fpbc1-1.fna&oh=28a02f1ee928b45f3686c7e45a9bfa5f&oe=5FA0054D" alt=""/>
                </div>
                <div className="chat__header__main__info">
                    <div className="chat__header__profile__name">
                        Eduardo Luis Santos
                    </div>
                    <div className="chat__header__last__message__info">
                        <div className="chat__header__last__message">
                            Activo(a) hace 14 min.
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
